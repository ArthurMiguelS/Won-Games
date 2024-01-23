import GameInfo, { GameInfoProps } from "@/Components/GameInfo"
import Gallery, { GalleryImageProps } from '@/Components/Gallery'
import GameDetails, { GameDetailsProps } from '@/Components/GameDetails'
import { GameCardProps } from '@/Components/GameCard'
import { HighlightProps } from '@/Components/Highlight'
import { Divider } from '@/Components/Divider'

import TextContent from '@/Components/TextContent'
import Showcase from '@/Components/Showcase'

import Base from "../Base"
import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

<S.Main>
  <S.SectionGameInfo>
    <GameInfo {...gameInfo} />
  </S.SectionGameInfo>
  <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>
      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>
      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
</S.Main>
  </Base>
)

export default Game
