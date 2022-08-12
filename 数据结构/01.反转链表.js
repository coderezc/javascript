let reverseList = function(head){
    let pre = null;
    let cur = head;
    while(cur){
        const next = head.next;
        cur.next = pre; 
        pre = cur;
        cur = next;
    }
    return pre;
}
let reverseList2 = function(head){
    if(head == null || head.next == null )return head;
        let newhead = reverseList2(head.next)
        head.next.next = head;
        head.next = null;
    
    return newhead;
}