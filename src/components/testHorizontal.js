import React from "react";
import ReactDOM from "react-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";
import { Footer } from "./footer";
import { Header } from "./header";
import "./globalStyles.css";

import useDrag from "./useDrag";

// NOTE: embrace power of CSS flexbox!
// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function App() {
  const [items] = React.useState(getItems);

  // NOTE: for drag by mouse
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [selected, setSelected] = React.useState < string > "";
  const handleItemClick = (itemId: string) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };

  return (
    <>
      <Header />
      <div className="example" style={{ paddingTop: "100px" }}>
        <div onMouseLeave={dragStop}>
          <ScrollMenu
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                onClick={handleItemClick(id)}
                selected={id === selected}
              />
            ))}
          </ScrollMenu>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
