function scale(s, k, n) {
    return s=="" ? "" : 
           s.split("\n")
            .map(x=>[...x].map(y=>Array(k+1).join(y)).join(""))
            .map(x=>[...Array(n)].map(y=>x).join("\n"))
            .join("\n");
}