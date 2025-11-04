| Example              | Why it’s global                                                              |
| -------------------- | ---------------------------------------------------------------------------- |
| Theme (dark/light)   | Multiple components like header, sidebar, modals all need to know the theme  |
| Sidebar open/close   | Both sidebar toggle button and main content layout depend on it              |
| Toast notifications  | Any component can trigger a message → multiple components must respond       |
| Modal visibility     | A modal opened in one component may need to block interaction in other parts |
| Filters/sort options | Many parts of a product listing page need to know current filters            |
| Temporary form state | Multi-step form that spans several components                                |
