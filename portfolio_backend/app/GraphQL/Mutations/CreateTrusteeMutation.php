<?php

namespace App\Graphql\Mutations;

use App\Models\Trustee;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Hash;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use Nuwave\Lighthouse\Support\Contracts\GraphQLMutation;


class CreateTrusteeMutation
{
    public function createTrustee($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)

    {
        $logoPath = null;

        if (isset($args['logo'])) {
            $logoPath = $args['logo']->store('uploads/Trustee_logos', 'public');
        }

        $trustee = Trustee::create([
            'name' => $args['name'],
            'logo' => $logoPath ? '/storage/' . $logoPath : null,
        ]);
        return [
            'trustee' => $trustee,
            'message' => 'Trustee created successfully',
        ];
    }
}
