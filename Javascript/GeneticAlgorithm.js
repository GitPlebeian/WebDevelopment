var geneLength = 15



var argument1 = {
    genes : "",
    randomizeGenes : function() {
        var dna = ''
        for (var i = 0; i < geneLength; i++) {
            dna += parseInt(Math.random() * 2)
            console.log(dna)
        }
        return dna
    }
}

var j = new Individual()