<?php

namespace App\Graphql\Mutations;

use App\Models\Blog;
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Support\Facades\Hash;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use Nuwave\Lighthouse\Support\Contracts\GraphQLMutation;


class CreateBlogMutation
{
    public function createBlog($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)

    {
        $imagePath = null;

        if (isset($args['image'])) {
            $imagePath = $args['image']->store('uploads/blog_images', 'public');
        }

        $blog = Blog::create([
            'title' => $args['title'],
            'image' => $imagePath ? '/storage/' . $imagePath : null,
            'markdown' => $args['markdown'],
            'tags' => $args['tags'],
            'url' => $args['url'],
        ]);
        return [
            'blog' => $blog,
            'message' => 'Blog created successfully',
        ];
    }
}
