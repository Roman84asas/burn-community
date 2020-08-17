<?php


use App\Models\Topic;
use App\Models\Message;
use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
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
        \DB::table('message')->truncate();

        $usersId = User::all();
        $topicIds = Topic::all();


        foreach (range(0, 25) as $i) {
            try {
                 Message::create([
                    'user_id' => $this->faker->randomElement($usersId->toArray())['id'],
                    'topic_id' => $this->faker->randomElement($topicIds->toArray())['id'],
                    'content' => $this->faker->words(random_int(10, 20), true),
                ]);

            } catch (Throwable $e) {
                echo 'ERROR: ' . $e->getMessage() . "\n";
            }
        }
    }

}
