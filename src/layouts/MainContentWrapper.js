import styled from "styled-components";

const sidebarWidth = "360px";

export default styled.div`
  width: 100%;
  max-width: calc(100% - ${sidebarWidth});
`;
