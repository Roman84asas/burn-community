<?php


use App\Models\Article;
use App\Models\Comment;
use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class CommentsSeeder extends Seeder
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
        \DB::table('comments')->truncate();

        $usersId = User::all();
        $topicIds = Article::all();


        foreach (range(0, 25) as $i) {
            try {
                Comment::create([
                    'user_id' => $this->faker->randomElement($usersId->toArray())['id'],
                    'article_id' => $this->faker->randomElement($topicIds->toArray())['id'],
                    'content' => $this->faker->words(random_int(10, 20), true),
                ]);

            } catch (Throwable $e) {
                echo 'ERROR: ' . $e->getMessage() . "\n";
            }
        }
    }
}
