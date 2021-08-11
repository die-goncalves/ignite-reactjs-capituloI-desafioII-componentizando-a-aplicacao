import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Grid, GridCellRenderer } from "react-virtualized";
import { MovieCard } from './MovieCard';

import '../styles/content.scss';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenreId: number;
}

const transformListInMatrix = (list: MovieProps[], moviesPerLine: number) => {
  let matrix: MovieProps[][] = [];

  for (let i = 0, k = -1; i < list.length; i++) {
    if (i % moviesPerLine === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }
  return matrix;
}

export function Content(props: ContentProps) {
  const width = window.innerWidth * 0.72;
  const height = window.innerHeight * 0.8275;
  let moviesMatrix: MovieProps[][] = [];
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${props.selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [props.selectedGenreId]);
  moviesMatrix = transformListInMatrix(movies, 3);

  const cellRenderer: GridCellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    return (
      <div key={key} style={style}>
        {moviesMatrix[rowIndex][columnIndex] !== undefined &&
          <MovieCard
            title={moviesMatrix[rowIndex][columnIndex].Title}
            poster={moviesMatrix[rowIndex][columnIndex].Poster}
            runtime={moviesMatrix[rowIndex][columnIndex].Runtime}
            rating={moviesMatrix[rowIndex][columnIndex].Ratings[0].Value}
          />
        }
      </div>
    );
  }

  return (
    <main id="specificMain">
      {moviesMatrix.length !== 0 &&
        <Grid
          className="movies-list"
          cellRenderer={cellRenderer}
          columnWidth={258.95}
          rowHeight={370}
          columnCount={moviesMatrix[0].length}
          rowCount={moviesMatrix.length}
          overscanRowCount={1}
          width={width}
          height={height}
        />
      }
    </main>
  )
}