<?php

use App\Models\Tag;
use App\Models\Topic;
use Illuminate\Database\Seeder;
use Faker\Factory;

class TagsSeeder extends Seeder
{
    /**
     * @var Factory
     */
    private $faker;

    /**
     * ArticlesSeeder constructor.
     */
    public function __construct()
    {
        $this->faker = Factory::create('ru_RU');
    }

    /**
     * Run the database seeds.
     */
    public function run()
    {
        \DB::table('tags')->truncate();
        \DB::table('topic_tags')->truncate();

        $topicIds = Topic::all()->pluck('id')->toArray();

        foreach (range(0, 50) as $i) {
            try {
                $tag = Tag::create([
                    'name' => $this->faker->words(random_int(0, 8) ? 1 : 2, true),
                ]);

                foreach (range(0, random_int(1, count($topicIds))) as $j) {
                    $topicId = $this->faker->randomElement($topicIds);

                    \DB::table('topic_tags')->insert([
                        'topic_id' => $topicId,
                        'tag_id'   => $tag->id,
                    ]);
                }
            } catch (Throwable $e) {
                echo 'ERROR: ' . $e->getMessage() . "\n";
            }
        }
    }
}
