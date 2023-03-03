import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from 'mui/icons-material/Delete'

export const MuiTooltip = () => {
    return (
        <Tooltip title='Delete'>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}