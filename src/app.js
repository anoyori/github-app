'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input
        type='search'
        placeholder='Digite o nome do usuário'
      />
    </div>
    <div className='user-info'>
      <img src='https://avatars.githubusercontent.com/u/80289735?v=4' />
      <h1>
        <a href='https://github.com/anoyori'>Amanda Noyori</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios: 30</li>
        <li>Seguidores: 34</li>
        <li>Seguindo: 46</li>
      </ul>
      <div className='actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositórios:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

      <div>
        <h2>Favoritos:</h2>
        <ul className='starred'>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
