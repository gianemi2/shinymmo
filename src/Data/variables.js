const variables = [
    {
        count: 8,
        permutations: [
            ["C", "C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "K1", "K1", "C", "C", "C"],
            ["C", "C", "C", "K1", "K1", "K1", "C", "C"],
            ["C", "C", "C", "K1", "K1", "K1", "K1", "C"],
            ["C", "C", "K1", "K1", "C", "C", "C", "C"],
            ["C", "C", "K1", "K1", "K1", "C", "C", "C"],
            ["C", "C", "K1", "K1", "K1", "K1", "C", "C"],
            ["C", "K1", "K1", "C", "C", "C", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "K2", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "K2", "K2", "C"],
            ["C", "K1", "K1", "K1", "C", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "K1", "C", "C", "C"],
            ["K1", "K1", "C", "C", "C", "C", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "K2", "K2", "C"],
            ["K1", "K1", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "K1", "C", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "K2", "K2", "C"],
            ["K1", "K1", "K1", "K1", "C", "C", "C", "C"]
        ]
    },
    {
        count: 9,
        permutations: [
            ["C", "C", "C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "K1", "K1", "C", "C", "C"],
            ["C", "C", "C", "C", "K1", "K1", "K1", "C", "C"],
            ["C", "C", "C", "C", "K1", "K1", "K1", "K1", "C"],
            ["C", "C", "C", "K1", "K1", "C", "C", "C", "C"],
            ["C", "C", "C", "K1", "K1", "K1", "C", "C", "C"],
            ["C", "C", "C", "K1", "K1", "K1", "K1", "C", "C"],
            ["C", "C", "K1", "K1", "C", "C", "C", "C", "C"],
            ["C", "C", "K1", "K1", "K2", "K2", "C", "C", "C"],
            ["C", "C", "K1", "K1", "K2", "K2", "K2", "C", "C"],
            ["C", "C", "K1", "K1", "K2", "K2", "K2", "K2", "C"],
            ["C", "C", "K1", "K1", "K1", "C", "C", "C", "C"],
            ["C", "C", "K1", "K1", "K1", "K1", "C", "C", "C"],
            ["C", "K1", "K1", "C", "C", "C", "C", "C", "C"],
            ["C", "K1", "K1", "C", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "C", "K2", "K2", "K2", "C", "C"],
            ["C", "K1", "K1", "C", "K2", "K2", "K2", "K2", "C"],
            ["C", "K1", "K1", "K2", "K2", "C", "C", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "K2", "K2", "C", "C"],
            ["C", "K1", "K1", "K1", "C", "C", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "K2", "K2", "K2", "C", "C"],
            ["C", "K1", "K1", "K1", "K2", "K2", "K2", "K2", "C"],
            ["C", "K1", "K1", "K1", "K1", "C", "C", "C", "C"],
            ["K1", "K1", "C", "C", "C", "C", "C", "C", "C"],
            ["K1", "K1", "C", "C", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "C", "C", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "C", "C", "K2", "K2", "K2", "K2", "C"],
            ["K1", "K1", "C", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "K2", "K2", "C", "C", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "K3", "K3", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "K3", "K3", "K3", "C", "C"],
            ["K1", "K1", "K2", "K2", "K3", "K3", "K3", "K3", "C"],
            ["K1", "K1", "K2", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "C", "C", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "C", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "C", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "K1", "C", "K2", "K2", "K2", "K2", "C"],
            ["K1", "K1", "K1", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "K1", "K1", "C", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "K1", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "K1", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "K1", "K1", "K2", "K2", "K2", "K2", "C"]
        ]
    },
    {
        count: 10,
        permutations: [
            ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "K1", "K1", "C", "C", "C"],
            ["C", "C", "C", "C", "C", "K1", "K1", "K1", "C", "C"],
            ["C", "C", "C", "C", "C", "K1", "K1", "K1", "K1", "C"],
            ["C", "C", "C", "C", "K1", "K1", "C", "C", "C", "C"],
            ["C", "C", "C", "C", "K1", "K1", "K1", "C", "C", "C"],
            ["C", "C", "C", "C", "K1", "K1", "K1", "K1", "C", "C"],
            ["C", "C", "C", "K1", "K1", "C", "C", "C", "C", "C"],
            ["C", "C", "C", "K1", "K1", "K2", "K2", "C", "C", "C"],
            ["C", "C", "C", "K1", "K1", "K2", "K2", "K2", "C", "C"],
            ["C", "C", "C", "K1", "K1", "K2", "K2", "K2", "K2", "C"],
            ["C", "C", "C", "K1", "K1", "K1", "C", "C", "C", "C"],
            ["C", "C", "C", "K1", "K1", "K1", "K1", "C", "C", "C"],
            ["C", "C", "K1", "K1", "C", "C", "C", "C", "C", "C"],
            ["C", "C", "K1", "K1", "C", "K2", "K2", "C", "C", "C"],
            ["C", "C", "K1", "K1", "C", "K2", "K2", "K2", "C", "C"],
            ["C", "C", "K1", "K1", "C", "K2", "K2", "K2", "K2", "C"],
            ["C", "C", "K1", "K1", "K2", "K2", "C", "C", "C", "C"],
            ["C", "C", "K1", "K1", "K2", "K2", "K2", "C", "C", "C"],
            ["C", "C", "K1", "K1", "K2", "K2", "K2", "K2", "C", "C"],
            ["C", "C", "K1", "K1", "K1", "C", "C", "C", "C", "C"],
            ["C", "C", "K1", "K1", "K1", "K2", "K2", "C", "C", "C"],
            ["C", "C", "K1", "K1", "K1", "K2", "K2", "K2", "C", "C"],
            ["C", "C", "K1", "K1", "K1", "K2", "K2", "K2", "K2", "C"],
            ["C", "C", "K1", "K1", "K1", "K1", "C", "C", "C", "C"],
            ["C", "K1", "K1", "C", "C", "C", "C", "C", "C", "C"],
            ["C", "K1", "K1", "C", "C", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "C", "C", "K2", "K2", "K2", "C", "C"],
            ["C", "K1", "K1", "C", "C", "K2", "K2", "K2", "K2", "C"],
            ["C", "K1", "K1", "C", "K2", "K2", "C", "C", "C", "C"],
            ["C", "K1", "K1", "C", "K2", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "C", "K2", "K2", "K2", "K2", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "C", "C", "C", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "K3", "K3", "C", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "K3", "K3", "K3", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "K3", "K3", "K3", "K3", "C"],
            ["C", "K1", "K1", "K2", "K2", "K2", "C", "C", "C", "C"],
            ["C", "K1", "K1", "K2", "K2", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "C", "C", "C", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "C", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "C", "K2", "K2", "K2", "C", "C"],
            ["C", "K1", "K1", "K1", "C", "K2", "K2", "K2", "K2", "C"],
            ["C", "K1", "K1", "K1", "K2", "K2", "C", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "K2", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "K2", "K2", "K2", "K2", "C", "C"],
            ["C", "K1", "K1", "K1", "K1", "C", "C", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "K1", "K2", "K2", "C", "C", "C"],
            ["C", "K1", "K1", "K1", "K1", "K2", "K2", "K2", "C", "C"],
            ["C", "K1", "K1", "K1", "K1", "K2", "K2", "K2", "K2", "C"],
            ["K1", "K1", "C", "C", "C", "C", "C", "C", "C", "C"],
            ["K1", "K1", "C", "C", "C", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "C", "C", "C", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "C", "C", "C", "K2", "K2", "K2", "K2", "C"],
            ["K1", "K1", "C", "C", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "C", "C", "K2", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "C", "C", "K2", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "C", "C", "C", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "K3", "K3", "C", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "K3", "K3", "K3", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "K3", "K3", "K3", "K3", "C"],
            ["K1", "K1", "C", "K2", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "C", "K2", "K2", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "C", "C", "C", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "C", "K3", "K3", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "C", "K3", "K3", "K3", "C", "C"],
            ["K1", "K1", "K2", "K2", "C", "K3", "K3", "K3", "K3", "C"],
            ["K1", "K1", "K2", "K2", "K3", "K3", "C", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "K3", "K3", "K3", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "K3", "K3", "K3", "K3", "C", "C"],
            ["K1", "K1", "K2", "K2", "K2", "C", "C", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "K2", "K3", "K3", "C", "C", "C"],
            ["K1", "K1", "K2", "K2", "K2", "K3", "K3", "K3", "C", "C"],
            ["K1", "K1", "K2", "K2", "K2", "K3", "K3", "K3", "K3", "C"],
            ["K1", "K1", "K2", "K2", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "C", "C", "C", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "C", "C", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "C", "C", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "K1", "C", "C", "K2", "K2", "K2", "K2", "C"],
            ["K1", "K1", "K1", "C", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "C", "K2", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "C", "K2", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "C", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "K3", "K3", "C", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "K3", "K3", "K3", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "K3", "K3", "K3", "K3", "C"],
            ["K1", "K1", "K1", "K2", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "K2", "K2", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "K1", "C", "C", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "K1", "C", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "K1", "C", "K2", "K2", "K2", "C", "C"],
            ["K1", "K1", "K1", "K1", "C", "K2", "K2", "K2", "K2", "C"],
            ["K1", "K1", "K1", "K1", "K2", "K2", "C", "C", "C", "C"],
            ["K1", "K1", "K1", "K1", "K2", "K2", "K2", "C", "C", "C"],
            ["K1", "K1", "K1", "K1", "K2", "K2", "K2", "K2", "C", "C"]
        ]
    }
]
export default variables