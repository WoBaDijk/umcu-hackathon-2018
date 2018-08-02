let organs: Array<any> = [
    {
        id: 1,
        name: "brain",
        alias: "Hersenen",
        status: 70,
        boundaries: {
            lower: -1,
            upper: -1
        },
        parameters: [
            {
                name: "madness",
                alias: "Mate van gestoord zijn",
                icon: "logo-freebsd-devil",
                boundaries: {
                    lower: -1,
                    upper: -1
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
        status: 50,
        boundaries: {
            lower: 30,
            upper: 70
        },
        parameters: [
            {
                name: "pulse",
                alias: "Hartslag",
                icon: "logo-freebsd-devil",
                boundaries: {
                    lower: -1,
                    upper: -1
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
                        value: 80,
                        text: "Hoog",
                        color: "warning"
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 80
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 80
                    }
                ]
            },
            {
                name: "rythm",
                alias: "Hartritme",
                icon: "logo-freebsd-devil",
                boundaries: {
                    lower: -1,
                    upper: -1
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
                        value: 80,
                        text: "Goed"
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 80
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 80
                    }
                ]
            },
            {
                name: "nibp",
                alias: "Bloeddruk",
                icon: "logo-freebsd-devil",
                boundaries: {
                    lower: -1,
                    upper: -1
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
                        value: 80,
                        text: "Normaal"
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 80
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 80
                    }
                ]
            },
            {
                name: "troponine",
                alias: "Hartenzymen",
                icon: "logo-freebsd-devil",
                boundaries: {
                    lower: -1,
                    upper: -1
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
                        value: 80,
                        text: "Licht verhoogd",
                        color: "warning"
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 80
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
        status: 20,
        boundaries: {
            lower: 30,
            upper: 70
        },
        parameters: [
            /* {
                name: "abtibiotics",
                alias: "Antibioticaspiegel",
                icon: "no-smoking",
                boundaries: {
                    lower: -1,
                    upper: -1
                },
                measurements: [
                    {
                        datetime: "1994-12-15T13:47",
                        value: 40
                    },
                    {
                        datetime: "1994-13-15T14:47",
                        value: 20
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 20,
                        text: "Laag",
                        color: "danger"
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 20,
                        text: "Laag",
                        color: "danger"
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 20,
                        text: "Laag",
                        color: "danger"
                    }
                ]
            },
            {
                name: "crp",
                alias: "Ontstekingseiwitten",
                icon: "no-smoking",
                boundaries: {
                    lower: -1,
                    upper: -1
                },
                measurements: [
                    {
                        datetime: "1994-12-15T13:47",
                        value: 40
                    },
                    {
                        datetime: "1994-13-15T14:47",
                        value: 20
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 20,
                        text: "Hoog",
                        color: "danger"
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 20,
                        text: "Hoog",
                        color: "danger"
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 20,
                        text: "Hoog",
                        color: "danger"
                    }
                ]
            }, */
            {
                name: "breathing",
                alias: "Ademhaling (per minuut)",
                icon: "no-smoking",
                boundaries: {
                    lower: -1,
                    upper: -1
                },
                measurements: [
                    {
                        datetime: "1994-12-15T13:47",
                        value: 40
                    },
                    {
                        datetime: "1994-13-15T14:47",
                        value: 20
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 40,
                        text: "Snel",
                        color: "warning"
                    }
                ]
            },
            {
                name: "satO2",
                alias: "Saturatie (% O2)",
                icon: "no-smoking",
                boundaries: {
                    lower: -1,
                    upper: -1
                },
                measurements: [
                    {
                        datetime: "1994-12-15T13:47",
                        value: 100
                    },
                    {
                        datetime: "1994-13-15T14:47",
                        value: 88
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 96,
                        text: "Normaal",
                    }
                ]
            },
            {
                name: "etCO2",
                alias: "End-tidal CO2 (mm Hg)",
                icon: "no-smoking",
                boundaries: {
                    lower: -1,
                    upper: -1
                },
                measurements: [
                    {
                        datetime: "1994-12-15T13:47",
                        value: 40
                    },
                    {
                        datetime: "1994-13-15T14:47",
                        value: 20
                    },
                    {
                        datetime: "1994-14-15T15:47",
                        value: 35,
                        text: "Laag-Normaal",
                        color: "warning"
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
            lower: -1,
            upper: -1
        },
        parameters: [
            {
                name: "beers",
                alias: "Aantal biertjes",
                icon: "beer",
                boundaries: {
                    lower: -1,
                    upper: -1
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
        ],
        treatments: [
            {
                id: 1,
                title: "Antibiotica is verhoogd"
            }
        ],
        advices: [
            {
                id: 1,
                title: "Bewegen met fysiotherapeut"
            },
            {
                id: 2,
                title: "Ademhalingsoefeningen doen"
            }
        ]
    },
    {
        id: 5,
        name: "gastrointestinal",
        alias: "Darmen",
        status: 20,
        boundaries: {
            lower: -1,
            upper: -1
        }
    },
    {
        id: 6,
        name: "pancreas",
        alias: "Alveesklier",
        status: 70,
        boundaries: {
            lower: -1,
            upper: -1
        }
    },
    {
        id: 7,
        name: "kidney_r",
        alias: "Rechter nier",
        status: 70,
        boundaries: {
            lower: -1,
            upper: -1
        }
    },
    {
        id: 8,
        name: "kidney_l",
        alias: "Linker nier",
        status: 70,
        boundaries: {
            lower: -1,
            upper: -1
        }
    }
];

export default organs;
