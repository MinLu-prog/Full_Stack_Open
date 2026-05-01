const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) =>{

    return blogs.reduce(function(sum,blog){
        return sum+blog.likes
    },0)

}

const favoriteBlog = (blogs) =>{
    return blogs.reduce((current,accumulator)=>{
        if(current.likes > accumulator.likes) {
            return current.author
        }else{
            return accumulator.author
        }

    }) 
}

const mostBlogs = (blogs) =>{
    return blogs.reduce((current,accumulator) =>{
        if(current.blogs > accumulator.blogs){
            return current.author
        }
        else {
            return accumulator.author
        }
    })
}

module.exports = {dummy, totalLikes,favoriteBlog,mostBlogs}