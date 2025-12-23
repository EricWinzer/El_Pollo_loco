const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud('../assets/img/5_background/layers/4_clouds/1.png'),
        new Cloud('../assets/img/5_background/layers/4_clouds/2.png', 350)
    ],
    [
        new BackgroundObject('../assets/img/5_background/layers/air.png'),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png'),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png'),
        new BackgroundObject('../assets/img/5_background/layers/air.png', 719),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', 719),
        new BackgroundObject('../assets/img/5_background/layers/air.png', 2 * 719),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 2 * 719),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png', 2 * 719),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png', 2 * 719),
        new BackgroundObject('../assets/img/5_background/layers/air.png', 3 * 719),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', 3 * 719),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', 3 * 719),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', 3 * 719),
        new BackgroundObject('../assets/img/5_background/layers/air.png', 4 * 719),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 4 * 719),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png', 4 * 719),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png', 4 * 719)
    ],
    [
        new Coin(400, 340),
        new Coin(500, 260),
        new Coin(600, 180),
        new Coin(700, 100),
        new Coin(800, 180),
        new Coin(900, 340),
        new Coin(1300, 300),
        new Coin(1400, 250),
        new Coin(1500, 200)
    ],
    [
        new Bottle(500, 0),
        new Bottle(800, 1),
        new Bottle(1200, 1),
        new Bottle(1500, 0),
        new Bottle(1800, 1)
    ]


);
