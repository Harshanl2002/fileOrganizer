/* eslint-disable prettier/prettier */
import { FolderOpen } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Tooltip,
  Typography
} from '@mui/material'
import React, { useState } from 'react'

const FolderSelector: React.FC = (): JSX.Element => {
  const [selectedFolder, setSelectedFolder] = useState<string>('')

  const handleSelectFolder = async () => {
    const folderPath = await (window.electron as any).selectFolder()
    if (folderPath) setSelectedFolder(folderPath)
  }
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '89vh'
      }}
    >
      <Card
        sx={{ boxShadow: 1, width: 1, gap: 1, rowGap: 1, columnGap: 1, borderRadius: 0.8, p: 2 }}
      >
        <CardContent sx={{ placeItems: 'center', display: 'grid' }}>
          <Button
            variant="text"
            startIcon={<FolderOpen />}
            sx={{ mt: 2 }}
            onClick={handleSelectFolder}
            color="primary"
          >
            Select Folder
          </Button>
          {selectedFolder && (
            <Typography variant="body2" sx={{ mt: 2, maxWidth: 1, userSelect: 'none' }} noWrap>
              Selected Folder:{' '}
              <Tooltip title={selectedFolder}>
                <span>{selectedFolder}</span>
              </Tooltip>
            </Typography>
          )}
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button variant="contained" color="primary" >Start</Button>
        </CardActions>
      </Card>
    </Container>
  )
}
export default FolderSelector
