import React from 'react';
import constants from '../../constants';
import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
import {} from 'lib-build/less!./AGOLHeader';

var text = i18n.builder.mediaPicker.browsePanel.sidePanel.agol;

/*
class CompoundMediaIcon extends React.Component {
  render() {
    return (
      <span className="compound-media fa fa-stack">
        <i className="fa fa-picture-o fa-stack-1x" />
        <i className="fa fa-circle fa-stack-2x" />
        <i className="fa fa-globe fa-stack-2x" />
        <CompoundMapIcon />
      </span>
    );
  }
}
*/

class CompoundMapIcon extends React.Component {
  render() {
    return (
      <span className="compound-map fa fa-stack">
        <i className="fa fa-map fa-inverse fa-stack-1x" />
        <i className="fa fa-map-o fa-stack-1x" />
        <i className="fa fa-circle fa-stack-1x auto-dim" />
        <i className="fa fa-map-marker fa-stack-1x auto-dim" />
      </span>
    );
  }
}

class FilterToggle extends React.Component {
  getIconSpan() {
    if (this.props.value === constants.contentType.WEBMAP) {
      return (
        <CompoundMapIcon />
      );
    }
    return (
        // <CompoundMediaIcon />
      <span className={'fa fa-' + this.props.icon} />
    );
  }

  render() {
    return (
      <label
        className={'btn btn-clear' + (this.props.checked ? ' active' : '')}
        tabIndex="4"
        htmlFor={this.props.id}
        title={this.props.label}
        onKeyPress={this.props.onClick} // keyboard navigation
        onClick={this.props.onClick} >
        {this.getIconSpan()}
        <span className="fa fa-check floating-check" />
        <input
          tabIndex="-1"
          onChange={this.props.onClick}
          checked={this.props.checked}
          type="checkbox"
          name="contentType"
          value={this.props.value}
          id={this.props.id} />
      </label>
    );
  }
}

class FilterToggles extends React.Component {

  thisOnClick(evt) {
    if (evt.charCode + 0 === evt.charCode) {
      if (evt.charCode !== 13) {
        return;
      }
      $(evt.currentTarget).toggleClass('active');
    }
    var activeToggles = $(evt.currentTarget.parentElement).find('.active input');
    if (!activeToggles.length) {
      this.props.onKeyPress([]);
      return;
    }
    var contentTypes = activeToggles.map((i, node) => {
      return node.value;
    }).get();
    this.props.onKeyPress(contentTypes);
  }

  isSelected(contentType) {
    return (
      this.props.selectedTypes.indexOf(contentType) >= 0 &&
      this.props.availTypes.indexOf(contentType) >= 0
    );
  }

  renderToggle(contentType) {
    let iconClass;
    switch (contentType) {
      case constants.contentType.WEBMAP:
        iconClass = null;
        break;
      case constants.contentType.WEBSCENE:
        iconClass = 'globe fa-2x';
        break;
      case constants.contentType.IMAGE:
        iconClass = 'picture-o fa-2x';
        break;
      case constants.contentType.VIDEO:
        iconClass = 'video-camera fa-2x';
        break;
      case constants.contentType.AUDIO:
        iconClass = 'volume-up fa-2x';
        break;
      default:
        console.warn('unknown toggle type', contentType);
        return null;
    }
    return (
      <FilterToggle
        id={'agol-' + contentType}
        key={'agol-' + contentType}
        icon={iconClass}
        onClick={(evt) => this.thisOnClick(evt)}
        value={contentType}
        label={text.filterAndSort[contentType]}
        checked={this.isSelected(contentType)}
      />
    );
  }

  render() {
    return (
      <div className="filter-toggle btn-group" data-toggle="buttons" >
        {this.props.availTypes.map(this.renderToggle.bind(this))}
      </div>
    );
  }
}

class VerticalDivider extends React.Component {
  render() {
    return (
      <div className="vert-divider" />
    );
  }
}

class CalendarSortIcon extends React.Component {

  getSortClass() {
    return 'fa-angle-' + (this.props.order === constants.sortOrder.ASC ? 'up' : 'down');
  }
  render() {
    return (
     <span className="fa fa-stack calendar-sort">
      <i className="fa fa-stack-1x fa-lg fa-calendar-o"  />
      <i className={'fa fa-stack-1x ' + this.getSortClass()} />
     </span>
   );
  }
}

class AlphaSortIcon extends React.Component {

  getSortClass() {
    return 'fa-sort-alpha-' + (this.props.order === constants.sortOrder.ASC ? 'asc' : 'desc');
  }
  render() {
    return (
      <span className={'fa inline ' + this.getSortClass()} />
   );
  }
}

class SortToggle extends React.Component {

  getSortIcon() {
    switch (this.props.value) {
      case constants.sortField.DATE:
        return (
          <CalendarSortIcon order={this.props.order} />
        );
      case constants.sortField.TITLE:
        return (
          <AlphaSortIcon order={this.props.order} />
        );
    }
  }

  render() {
    return (
      <label
        className={'btn btn-clear' + (this.props.checked ? ' active' : '')}
        tabIndex="5"
        title={this.props.hoverText}
        htmlFor={this.props.id}
        onKeyPress={this.props.onClick}
        onClick={this.props.onClick} >
        {this.getSortIcon()}
        <span className="btn-label">{this.props.label}</span>
        <input
          onChange={this.props.onClick}
          checked={this.props.checked}
          type="radio"
          name="contentType"
          value={this.props.value}
          id={this.props.id} />
      </label>
    );
  }
}

class SortToggles extends React.Component {
  thisOnClick(evt, sortField, sortOrder) {
    if ((evt.charCode + 0 === evt.charCode) && evt.charCode !== 13) {
      return;
    }

    if (sortField === this.props.sortField) {
      var newSortOrder = this.switchSortOrder(sortOrder);
      this.props.onKeyPress.sortOrderChange(newSortOrder, sortField);
      return;
    }
    this.props.onKeyPress.sortFieldChange(sortField, sortOrder);
  }

  switchSortOrder(currentOrder) {
    if (currentOrder === constants.sortOrder.ASC) {
      return constants.sortOrder.DESC;
    }
    return constants.sortOrder.ASC;
  }

  isSelected(field) {
    return this.props.sortField === constants.sortField[field];
  }

  render() {
    return (
      <div className="sort-toggle btn-group" data-toggle="buttons">
        <SortToggle
          id="date-sort"
          onClick={(evt) => this.thisOnClick(evt, constants.sortField.DATE, this.props.sortOrder.date)}
          value={constants.sortField.DATE}
          checked={this.isSelected('DATE')}
          order={this.props.sortOrder.date}
          label={text.filterAndSort.date}
          hoverText={text.filterAndSort.sortByDate}
        />
        <SortToggle
          id="title-sort"
          onClick={(evt) => this.thisOnClick(evt, constants.sortField.TITLE, this.props.sortOrder.title)}
          value={constants.sortField.TITLE}
          checked={this.isSelected('TITLE')}
          order={this.props.sortOrder.title}
          label={text.filterAndSort.title}
          hoverText={text.filterAndSort.sortByTitle}
        />
      </div>
    );
  }
}
class AGOLHeader extends React.Component {

  render() {
    return (
      <div className="agol-header">
        <FilterToggles
          availTypes={this.props.containerState.availableContentTypes}
          selectedTypes={this.props.containerState.selectedContentTypes}
          onKeyPress={this.props.onKeyPress.selectedContentTypesChange}
        />
        <VerticalDivider />
        <SortToggles
          onKeyPress={this.props.onKeyPress}
          sortField={this.props.sortField}
          sortOrder={{
            date: this.props.containerState.dateSortOrder,
            title: this.props.containerState.titleSortOrder
          }}
        />
      </div>
    );
  }
}

export default AGOLHeader;
