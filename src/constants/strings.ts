export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const WIN_MESSAGES = ['Wakĩona makano!', 'Nĩ hau', 'Nĩ wanyiita']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Ndemwa tijiganu'
export const WORD_NOT_FOUND_MESSAGE = 'Kiugo kĩu nĩ kĩgeni'
export const HARD_MODE_ALERT_MESSAGE = 'Nĩkũũma na ngũri (Hard Mode)'
export const HARD_MODE_DESCRIPTION =
  'Wonio mbũgũ no mũhaka ũmĩhũthĩre'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Akia nĩguo woone ndemwa weega'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Kiugo kiuma ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Gũtarana'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'Thaaka thutha wa'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Mageria'
export const SUCCESS_RATE_TEXT = 'Gũtoorania'
export const CURRENT_STREAK_TEXT = 'Ũthiĩte atĩa?'
export const BEST_STREAK_TEXT = 'Gũthaaka ũtegũtĩrĩria'
