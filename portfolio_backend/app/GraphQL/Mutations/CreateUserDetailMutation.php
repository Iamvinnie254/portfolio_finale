<?php

namespace App\Graphql\Mutations;

use App\Models\User;
use App\Models\UserDetail;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Hash;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use Nuwave\Lighthouse\Support\Contracts\GraphQLMutation;
use Stringable;
use Illuminate\Support\Str;

class CreateUserDetailMutation
{
    public function createUserDetail($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)

    {
        $image = $args['imge'];
        $cv = $args['cv'];

        /*  if (isset($args['image'])) {
            $imagePath = $args['image']->store('uploads/User_images', 'public');
            $cv = $args['cv']->store('uploads/User_CV_Pdf', 'public');
        } */

        // Validate file types
        if (!in_array($cv->getClientOriginalExtension(), ['cv'])) {
            return [
                'message' => 'The file must be a PDF.',
                'upload' => null,
            ];
        }
        // Extract and slugify file names
        $fileOriginalName = pathinfo($cv->getClientOriginalName(), PATHINFO_FILENAME);

        $fileName = Str::slug($fileOriginalName) . "-" . time() . ".pdf";


        // Store the files
        $cvPath = $cv->storeAs('uploads/User_CV_Pdf', $fileName, 'public');
        $imagePath = $image->storeAs('uploads/User_images', 'public');

        $user = UserDetail::create([
            'name' => $args['name'],
            'image' => $imagePath ? '/storage/' . $imagePath : null,
            'cv' => "/storage/$cvPath"
        ]);
        return [
            'user' => $user,
            'message' => 'user created successfully',
        ];
    }
}
