import { styled } from 'rt-util'

export default styled('div')`
  height: calc(100% - 76px);
  background-color: ${({ theme: { background } }) => background.backgroundSecondary};
  border-radius: 3px;

  .ag-header {
    border-bottom: 2px solid ${({ theme: { background } }) => background.backgroundPrimary};
    font-size: 0.6875rem;
    text-transform: uppercase;
  }

  .ag-header-container {
    margin-top: 0.75rem;
  }

  .ag-row-odd {
    background-color: ${({ theme: { background } }) => background.backgroundPrimary};
  }

  .ag-row-odd:hover {
    background-color: ${({ theme: { background } }) => background.backgroundTertiary};
  }

  .ag-row-even:hover {
    background-color: ${({ theme: { background } }) => background.backgroundTertiary};
  }

  .rt-blotter__row-pending {
    background-color: ${({ theme: { background } }) => background.backgroundExtra};
  }

  .rt-blotter__status-indicator--done {
    width: 5px !important;
    padding: 0;
    margin: 0;
    background-color: ${({ theme: { palette } }) => palette.accentGood.normal};
  }

  .rt-blotter__status-indicator--rejected {
    width: 5px !important;
    padding: 0;
    margin: 0;
    background-color: ${({ theme: { palette } }) => palette.accentBad.normal};
  }

  .rt-blotter__cell-rejected,
  .rt-blotter__cell-done,
  .rt-blotter__cell-pending {
    text-transform: capitalize;
  }

  .rt-blotter__row-rejected:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    border-bottom: 1px solid ${({ theme: { palette } }) => palette.accentBad.normal};
    width: 100%;
  }

  .ag-row {
    transition: none;
  }

  .ag-cell {
    display: flex;
    align-items: center;
  }

  .ag-filter-icon {
    color: ${({ theme: { text } }) => text.textSecondary};
    display: none;
  }

  .ag-header-cell-filtered {
    .ag-header-cell-menu-button {
      opacity: 1 !important;
    }
  }

  .ag-cell-label-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .ag-header-cell-label {
      order: -1;
    }

    i {
      padding: 0 0.25rem;
    }
  }

  .ag-header-cell-label i {
    color: ${({ theme: { text } }) => text.textPrimary};
    padding: 0 0.25rem;
  }

  .ag-menu {
    background-color: ${({ theme: { background } }) => background.backgroundPrimary};
    box-shadow: 0 0 0.5px 0 ${({ theme: { text } }) => text.textPrimary};
    border-radius: 3px;

    .filter-container__checkbox-container {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      font-size: 0.6875rem;

      &:hover {
        background-color: ${({ theme: { background } }) => background.backgroundTertiary};
      }
    }

    .filter_container__select-all-option-container {
      border-bottom: 2px solid ${({ theme: { text } }) => text.textMeta};
    }

    .filter-container__free-text-input,
    .filter-container__select {
      margin: 0.625rem;
      font-size: 0.6875rem;
      padding: 0.375rem;
      color: ${({ theme: { text } }) => text.textPrimary};
      background-color: ${({ theme: { background } }) => background.backgroundPrimary};
      border: none;
      border-bottom: 1px solid ${({ theme: { text } }) => text.textMeta};
      width: auto;
      outline: none;

      &:focus {
        border-bottom: 1px solid ${({ theme: { palette } }) => palette.accentPrimary.normal};
      }
    }

    option {
      padding: 0.5rem 0.625rem;
    }

    option:hover {
      background-color: ${({ theme: { background } }) => background.backgroundTertiary};
    }

    input[type='checkbox' i] {
      margin-right: 0.5rem;
      cursor: pointer;
    }

    label {
      text-transform: capitalize;
    }
  }
`
