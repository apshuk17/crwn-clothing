import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const collectionRenderer = collection => {
  let collectionOutput;
  if (!collection) {
    collectionOutput = <Redirect to={"/shop"} />;
  }
  const { title, items } = collection;
  collectionOutput = (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
  return collectionOutput;
};

const CollectionPage = ({ collection }) => {
  return collectionRenderer(collection);
};

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params;
  return { collection: selectCollection(collectionId)(state) };
};

export default connect(mapStateToProps)(CollectionPage);
