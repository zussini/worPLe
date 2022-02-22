export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Świetnie!', 'Dobra robota!', 'Udało się!']
export const GAME_COPIED_MESSAGE = 'Gra skopiowana do schowka'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Nie wystarczająca ilość liter'
export const WORD_NOT_FOUND_MESSAGE = 'Nie znaleziono słowa'
export const HARD_MODE_ALERT_MESSAGE =
  'Tryb trudny może być uruchomiony tylko na początku!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Szukane słowo to ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Należy użyć ${guess} w pozycji ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Musisz użyć ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Skasuj'
export const STATISTICS_TITLE = 'Statystyki'
export const GUESS_DISTRIBUTION_TEXT = 'Rozkład wyników'
export const NEW_WORD_TEXT = 'Nowe słowo w'
export const SHARE_TEXT = 'Podziel się'
export const TOTAL_TRIES_TEXT = 'Ilość prób'
export const SUCCESS_RATE_TEXT = 'Proporcja wygranych'
export const CURRENT_STREAK_TEXT = 'Obecna seria'
export const BEST_STREAK_TEXT = 'Najlepsza seria'
