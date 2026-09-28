async function configureSidePanel() {
  await chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: true
  })
}

chrome.runtime.onInstalled.addListener(() => {
  configureSidePanel().catch((error) => {
    console.error('Failed to configure side panel:', error)
  })
})

chrome.runtime.onStartup.addListener(() => {
  configureSidePanel().catch((error) => {
    console.error('Failed to configure side panel:', error)
  })
})