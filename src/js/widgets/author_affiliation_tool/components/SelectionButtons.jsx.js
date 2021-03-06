
define([
  'react'
], function (React) {
  /**
   * Set of buttons
   */
  const SelectionButtons = ({ onClick }) => (
    <div className="btn-toolbar pull-right">
      <button className="btn btn-default"
              onClick={() => onClick('toggleall')}
      >Toggle All</button>
      <button className="btn btn-default"
              onClick={() => onClick('reset')}
      >Reset</button>
    </div>
  );

  return SelectionButtons;
});
