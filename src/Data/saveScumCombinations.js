/**
 * 
 * \t\t -> 
 * \n\t -> \n
 * \t -> ","
 * \n -> ",\n"
 * ,"", -> 
 * ,\n -> \n
 * \n  -> ],\n[
 */

const saveScumCombinations = [
    {
        count: 8,
        permutations: [
            [
                ["C", "C", "C", "C", "C", "C", "C", "C"]
            ],
            [
                ["K1", "K1", "S", "C", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
                ["K1", "K1", "C", "S", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"]
            ],
            [
                ["K1", "K1", "K1", "S", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["K1", "K1", "K1", "K1", "C", "C", "C", "C"],
            ],
            [
                ["C", "K1", "K1", "S", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "S", "K1", "K1", "K1", "C", "C", "C", "C"],
                ["K1", "K1", "K1", "K1", "C", "C", "C"],
                ["C", "C", "S", "K1", "K1", "C", "C", "C", "C"],
                ["K1", "K1", "K1", "C", "C", "C"],
                ["K1", "K1", "K1", "K1", "C", "C"],
                ["C", "C", "C", "S", "K1", "K1", "C", "C", "C"],
                ["K1", "K1", "K1", "C", "C"],
                ["K1", "K1", "K1", "K1", "C"]
            ]
        ]
    },
    {
        count: 9,
        permutations: [
            [
                ["C", "C", "C", "C", "C", "C", "C", "C", "C"],
            ],
            [
                ["K1", "K1", "S", "C", "C", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C", "C"],
                ["K1", "K1", "C", "S", "K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
                ["K1", "K1", "C", "C", "S", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["K1", "K1", "K2", "K2", "S", "K3", "K3", "C", "C", "C"],
                ["K3", "K3", "K3", "C", "C"],
                ["K3", "K3", "K3", "K3", "C"],
            ],
            [
                ["K1", "K1", "K1", "S", "C", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
                ["K1", "K1", "K1", "C", "S", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["K1", "K1", "K1", "K1", "S", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "K1", "K1", "S", "C", "C", "C", "C", "C", "C"],
                ["C", "K2", "K2", "C", "C", "C"],
                ["C", "K2", "K2", "K2", "C", "C"],
                ["C", "K2", "K2", "K2", "K2", "C"],
                ["K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
            ],
            [
                ["C", "K1", "K1", "K1", "S", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "K1", "K1", "K1", "K1", "S", "C", "C", "C", "C"],
            ],
            [
                ["C", "C", "K1", "K1", "S", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "C", "S", "K1", "K1", "K1", "C", "C", "C", "C"],
                ["K1", "K1", "K1", "K1", "C", "C", "C"],
            ],
            [
                ["C", "C", "C", "S", "K1", "K1", "C", "C", "C", "C"],
                ["K1", "K1", "K1", "C", "C", "C"],
                ["K1", "K1", "K1", "K1", "C", "C"],
                ["C", "C", "C", "C", "S", "K1", "K1", "C", "C", "C"],
                ["K1", "K1", "K1", "C", "C"],
                ["K1", "K1", "K1", "K1", "C"]
            ]
        ]
    },
    {
        count: 10,
        permutations: [
            [
                ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
            ],
            [
                ["K1", "K1", "S", "C", "C", "C", "C", "C", "C", "C", "C"],
                ["K1", "K1", "C", "S", "K2", "K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C", "C"],
                ["K1", "K1", "C", "C", "S", "K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
                ["K1", "K1", "C", "C", "C", "S", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["K1", "K1", "K2", "K2", "S", "C", "C", "C", "C", "C", "C"],
                ["K3", "K3", "C", "C", "C", "C"],
                ["K3", "K3", "K3", "C", "C", "C"],
                ["K3", "K3", "K3", "K3", "C", "C"],
                ["K1", "K1", "K2", "K2", "C", "S", "K3", "K3", "C", "C", "C"],
                ["K3", "K3", "K3", "C", "C"],
                ["K3", "K3", "K3", "K3", "C"],
            ],
            [
                ["K1", "K1", "K2", "K2", "K2", "S", "C", "C", "C", "C", "C"],
                ["K3", "K3", "C", "C", "C"],
                ["K3", "K3", "K3", "C", "C"],
                ["K3", "K3", "K3", "K3", "C"],
            ],
            [
                ["K1", "K1", "K2", "K2", "K2", "K2", "C", "C", "C", "C"],
            ],
            [
                ["K1", "K1", "C", "K2", "K2", "S", "C", "C", "C", "C", "C"],
                ["K3", "K3", "C", "C", "C"],
                ["K3", "K3", "K3", "C", "C"],
                ["K3", "K3", "K3", "K3", "C"],
            ],
            [
                ["K1", "K1", "K1", "S", "C", "C", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C", "C"],
                ["K1", "K1", "K1", "C", "S", "K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
                ["K1", "K1", "K1", "C", "C", "S", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["K1", "K1", "K1", "K2", "K2", "S", "K3", "K3", "C", "C", "C"],
                ["K3", "K3", "K3", "C", "C"],
                ["K3", "K3", "K3", "K3", "C"],
            ],
            [
                ["K1", "K1", "K1", "K1", "S", "C", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
                ["K1", "K1", "K1", "K1", "C", "S", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "K1", "K1", "S", "C", "C", "C", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C", "C"],
                ["C", "K1", "K1", "C", "S", "K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
                ["C", "K1", "K1", "C", "C", "S", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "K1", "K1", "K2", "K2", "S", "C", "C", "C", "C", "C"],
                ["K3", "K3", "C", "C", "C"],
                ["K3", "K3", "K3", "C", "C"],
                ["K3", "K3", "K3", "K3", "C"],
            ],
            [
                ["C", "K1", "K1", "K1", "S", "C", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
                ["C", "K1", "K1", "K1", "C", "S", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "K1", "K1", "K1", "K1", "S", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "C", "K1", "K1", "S", "C", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "K2", "C", "C"],
                ["C", "C", "K1", "K1", "C", "S", "K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "C", "K1", "K1", "K1", "S", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "C", "K1", "K1", "K1", "K1", "C", "C", "C", "C"],
            ],
            [
                ["C", "C", "C", "K1", "K1", "S", "C", "C", "C", "C", "C"],
                ["K2", "K2", "C", "C", "C"],
                ["K2", "K2", "K2", "C", "C"],
                ["K2", "K2", "K2", "K2", "C"],
            ],
            [
                ["C", "C", "C", "S", "K1", "K1", "K1", "C", "C", "C", "C"],
                ["K1", "K1", "K1", "K1", "C", "C", "C"],
                ["C", "C", "C", "C", "S", "K1", "K1", "C", "C", "C", "C"],
                ["K1", "K1", "K1", "C", "C", "C"],
                ["K1", "K1", "K1", "K1", "C", "C"],
                ["C", "C", "C", "C", "C", "S", "K1", "K1", "C", "C", "C"],
                ["K1", "K1", "K1", "C", "C"],
                ["K1", "K1", "K1", "K1", "C"]
            ]
        ]
    }
]

export default saveScumCombinations