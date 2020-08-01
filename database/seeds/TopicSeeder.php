<?php


use App\Models\Topic;
use App\Models\User;
use Carbon\Carbon;
use Faker\Factory;
use Illuminate\Database\Seeder;

class TopicSeeder extends Seeder
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
        Topic::truncate();

        $users = User::all();

        foreach (range(0, 50) as $i) {
            Topic::create([
                'user_id'           => $this->faker->randomElement($users->toArray())['id'],
                'title'             => $this->faker->words(random_int(2, 8), true),
                'content_source'    => $this->faker->sentence(random_int(25, 35), true),
                'content_rendered'  => $this->faker->sentence(random_int(25, 35), true),
                'status'            => $this->faker->randomElement(['Draft', 'Review', 'Published']),
                'published_at'      => Carbon::now()
                    ->subDays(30)
                    ->addDays(random_int(0, 6))
            ]);
        }

    }
}
