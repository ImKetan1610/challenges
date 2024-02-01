const useNode = () => {
  const insertNode = function (tree, commentId, item) {
    if (tree.id === commentId) {
      tree.items.push({
        id: new Date().getTime(),
        name: item,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ele) => {
      return insertNode(ele, commentId, item);
    });

    return { ...tree, items: latestNode };
  };

  const updateNode = function (tree, commentId, value) {
    if (tree.id === commentId) {
      tree.name = value;
      return tree;
    }

    tree.items.map((ele) => {
      return updateNode(ele, commentId, value);
    });

    return { ...tree };
  };

  const deleteNode = function (tree, commentId) {
    for (let i = 0; i < tree.items.length; i++) {
      const currentItem = tree.items[i];
      if (currentItem.id === commentId) {
        tree.items.splice(i, 1);
      } else {
        deleteNode(currentItem, commentId);
      }
    }
    return tree;
  };

  return { insertNode, updateNode, deleteNode };
};

export default useNode;
