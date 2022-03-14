import React, { useEffect, useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'
import PokemonList from '../Data/pokemon'
import { Select, Image, Empty } from 'antd'

const { Option } = Select

function Pokemon() {
    const [pokemon, setPokemon] = useLocalStorage('pokemon', false)
    const [selected, setSelected] = useState({ name: '', url: '' })

    useEffect(() => {
        if (!pokemon) return
        const selectedPKMN = PokemonList.find(item => item.name.toLowerCase() === pokemon.toLowerCase())
        setSelected(selectedPKMN)
    }, [pokemon])

    return (
        <>
            {
                selected
                    ? <div style={imageContainer} className="pokemon-view">
                        <div>
                            <Image src={selected.url} alt={selected.name} preview={false} style={image} className="shiny" />
                            <Image src={selected.url.replace('shiny', 'base')} alt={selected.name} preview={false} style={image} className="base" />
                        </div>
                    </div>
                    : false
            }

            <Select
                showSearch
                placeholder="I'm looking for..."
                optionFilterProp="children"
                defaultValue={pokemon ? pokemon : null}
                onChange={setPokemon}
                options={PokemonList.map(item => ({ label: item.name, value: item.name }))}
                filterOption={(input, option) =>
                    option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                notFoundContent={<Empty description="No pokemon found" image="/assets/404.png" />}
                style={{ width: "100%", marginBottom: 15 }}
            >
            </Select>
        </>
    )
}

const imageContainer = {
    textAlign: 'center',
    marginBottom: 15
}

const image = {
    borderRadius: '50%',
    border: '1px solid white'
}

export default Pokemon