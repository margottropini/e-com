import { createSelector} from 'reselect'

const selectDrirectory = state => state.directory


export  const selectDirectorySections = createSelector(
    [selectDrirectory],
    directory => directory.sections
)