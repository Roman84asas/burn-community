<?php

use App\Models\Article;
use App\Models\User;
use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Database\Seeder;

class ArticelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $faker;

    public function __construct()
    {
        $this->faker = Factory::create('ru_RU');
    }

    public function run()
    {
        Article::truncate();

        $users = User::all();

        foreach (range(0, 50) as $i) {
            Article::create([
                'user_id' => $this->faker->randomElement($users->toArray())['id'],
                'title' => $this->faker->words(random_int(2, 8), true),
                'image'          => $this->faker->randomElement([
                    '1.png',
                    '2.png',
                    '3.png',
                    '4.png',
                    '5.png',
                    '6.png',
                ]),
                'description' => $this->faker->words(random_int(5, 15), true),
                'content' => $this->faker->sentence(random_int(25, 35), true),
                'published_at' => Carbon::now()
                ->subDays(30)
                ->addDays(random_int(0, 6))
            ]);
        }

    }
}
