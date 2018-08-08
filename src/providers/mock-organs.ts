let organs: Array<any> = [
    {
        id: 1,
        name: "brain",
        alias: "Hersenen",
        status: 70,
        boundaries: {
            lower: 30,
            upper: 80
        },
        parameters: [
            {
                name: "madness",
                alias: "Mate van gestoord zijn",
                icon: "logo-freebsd-devil",
                boundaries: {
                    lower: 3,
                    upper: 10
                },
                measurements: [
                    {
                        datetime: "1994-12-15T13:47",
                        value: 1
                    },
                    {
                        datetime: "1994-13-15T14:47",
                        value: 4
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 20
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "heart",
        alias: "Hart",
        status: 100,
        boundaries: {
            lower: 30,
            upper: 80
        },
        parameters: [
            {
                name: "pulse",
                alias: "Hartslag",
                icon: "logo-freebsd-devil",
                boundaries: {
                    lower: 45,
                    upper: 150
                },
                measurements: [
                    {
                        datetime: "1994-12-15T13:47",
                        value: 50
                    },
                    {
                        datetime: "1994-13-15T14:47",
                        value: 30
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 80
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "lungs",
        alias: "Luchtwegen",
        status: 70,
        boundaries: {
            lower: 30,
            upper: 80
        },
        parameters: [
            {
                name: "sigarets",
                alias: "Aantal sigaretten",
                icon: "no-smoking",
                boundaries: {
                    lower: 30,
                    upper: 70
                },
                measurements: [
                    {
                        datetime: "1994-12-15T13:47",
                        value: 40
                    },
                    {
                        datetime: "1994-13-15T14:47",
                        value: 80
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 11
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "liver",
        alias: "Lever",
        status: 70,
        boundaries: {
            lower: 30,
            upper: 80
        },
        parameters: [
            {
                name: "beers",
                alias: "Aantal biertjes",
                icon: "beer",
                boundaries: {
                    lower: 7,
                    upper: 15
                },
                measurements: [
                    {
                        datetime: "1994-12-15T13:47",
                        value: 20
                    },
                    {
                        datetime: "1994-13-15T14:47",
                        value: 8
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 11
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "gastrointestinal",
        alias: "Darmen",
        status: 20,
        boundaries: {
            lower: 30,
            upper: 80
        }
    },
    {
        id: 6,
        name: "pancreas",
        alias: "Alveesklier",
        status: 70,
        boundaries: {
            lower: 30,
            upper: 80
        }
    }
];

export default organs;
