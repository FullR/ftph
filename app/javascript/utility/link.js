


/*
    Iterates over an arbitrary number of nodes
    linking each one to the next node and the
    previous node.

    The index is also added to each node
*/
function link(nodes) {
    var last = nodes[0];
    nodes.reduce(function(previous, current, index) {
        previous.next = current;
        current.previous = previous;
        current.index = index;

        return current;
    });
    return nodes;
}

module.exports = link;