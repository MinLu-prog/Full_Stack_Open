const {describe, test } = require('node:test')
const assert = require('node:assert')

const listhelper = require('../utils/list_helper')

describe('dummy return one', test('test case one',()=>{
    const array = listhelper.dummy([])
    assert.strictEqual(array,1)
}))
describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listhelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 5)
  })
})

describe('top blog', ()=>{
  const blogs = [
        {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'Your mom',
      author: 'Shwe Min Lu',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 8,
      __v: 0
    }

  ]
test('this test will output the top blog',()=>{
  const result = listhelper.favoriteBlog(blogs)
  assert.strictEqual(result ,'Shwe Min Lu')
})

})

describe('most Like blogs' , ()=>{
  const blog1 = [
    {
    author: "Robert C. Martin",
    blogs: 3
    }
    ,{
      author : "Min Lu",
      blogs : 4
    }
  ]
  test('this wiill output the name of the author', ()=>{
    const result = listhelper.mostBlogs(blog1)
    assert.strictEqual(result,'Min Lu')
  })

})