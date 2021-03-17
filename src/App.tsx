import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleClickButton={handleClickButton} selectedGenreId={selectedGenreId}/>

      <div style={{ maxWidth: '52.5rem', width: '100%', margin: '0 auto' }}>
        <Header selectedGenreId={selectedGenreId} />

        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  )
}