<?php

namespace App\Graphql\Mutations;

use App\Models\Recommendation;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Hash;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use Nuwave\Lighthouse\Support\Contracts\GraphQLMutation;


class CreateRecommendationMutation
{
    public function createRecommendation($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)

    {
        $imagePath = null;

        if (isset($args['image'])) {
            $imagePath = $args['image']->store('uploads/Recommenders_images', 'public');
        }

        $recommendation = Recommendation::create([
            'name' => $args['name'],
            'occupation' => $args['occupation'],
            'company' => $args['company'],
            'message' => $args['message'],
            'github_link' => $args['github_link'],
            'linkedin_link' => $args['linkedin_link'],
            'phone_number' => $args['phone_number'],
            'email' => $args['email'],
            'image' => $imagePath ? '/storage/' . $imagePath : null,
        ]);
        return [
            'recommendation' => $recommendation,
            'message' => 'Blog created successfully',
        ];
    }
}
