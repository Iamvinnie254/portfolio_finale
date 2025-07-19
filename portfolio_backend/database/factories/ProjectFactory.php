<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProjectFactory extends Factory
{

    public function definition(): array
    {
        $title = $this->faker->sentence(3);
        return [
            'title' => $title,
           // 'slug' => Str::slug($title),
            'description' => $this->faker->paragraph(),
            'image_url' => $this->faker->imageUrl(640, 480, 'tech'),
            'live_demo_url' => $this->faker->url(),
            'source_code_url' => $this->faker->url(),
            'tech_stack' => implode(',', $this->faker->randomElements([
                'React',
                'Vue',
                'Laravel',
                'Tailwind CSS',
                'MySQL'
            ], 3)),
            'created_at' => now(),
            'updated_at' => now(),
        ];;
    }
}
