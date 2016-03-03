# git-show-ref

List the references from the local repository in a Node streamy way (by shelling out to [git-show-ref(1)](http://git-scm.com/docs/git-show-ref)).

## Usage

`gitShowRef(repoPath[, options])` - where options can have 2 properties: `tags` and `heads` (both boolean).

```js
var gitShowRef = require('git-show-ref');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));

gitShowRef(repoPath).on('data', function(data) {
  console.log(data);
}).on('error', function(err) {
  throw err;
}).on('end', function() {
  console.log("\n-----------------");
  console.log("That's all folks!");
});
```

The output could look like the following:

```
{
    "hash": "806d880e4e78f677d2726a3ad0e4d0e8ce371283",
    "name": "heads/master"
}

{
    "hash": "821e15e5f2d9ef2aa43918a16cbd00f40c221e95",
    "name": "remotes/origin/encoding"
}

{
    "hash": "b68b47672e613e94a7859c9549e9cd4b401f7b79",
    "name": "tags/v0.10.0"
}
```


## Tests

```
npm test
```

## License

MIT
