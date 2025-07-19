<?php

namespace App\Graphql\Mutations;

use App\Models\Project;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Hash;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use Nuwave\Lighthouse\Support\Contracts\GraphQLMutation;


class CreateProjectMutation
{
    public function createProject($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)

    {
        $input = $args['input'];
        $imagePath = null;


        if (isset($input['image'])) {
            $imagePath = $input['image']->store('project_images', 'public');
        }

        $project = Project::create([
            'title' => $input['title'],
            'description' => $input['description'],
            'project_preview_image' => $imagePath,
            'live_demo_url' => $input['live_demo_url'],
            'source_code_url' => $input['source_code_url'],
            'tech_stack' => $input['tech_stack']
        ]);
        return [
            'project' => $project,
            'message' => 'Project created successfully',
        ];
    }
}
