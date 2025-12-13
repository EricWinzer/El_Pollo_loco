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
        new Coin(400, 300),
        new Coin(600, 250),
        new Coin(900, 200),
        new Coin(1300, 300),
        new Coin(1600, 250),
        new Coin(1900, 200)
    ]


);
