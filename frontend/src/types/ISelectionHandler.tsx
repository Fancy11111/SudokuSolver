export default interface ISelectionHandler {
  (row: number, column: number, group: number): void
}