<?php

namespace App\Graphql\Mutations;

use App\Models\Social;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Hash;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use Nuwave\Lighthouse\Support\Contracts\GraphQLMutation;


class CreateSocialMutation
{
    public function createSocial($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)

    {
        $social = Social::create([
            'name' => $args['name'],
            'url' => $args['url'],
           
        ]);
        return [
            'social' => $social,
            'message' => 'social-media updated successfully',
        ];
    }
}