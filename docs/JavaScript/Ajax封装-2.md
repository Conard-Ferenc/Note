# 用Promise封装Ajax

## 还是封装前演示
**post**

```javascript
var baseUrl = "http:127.0.0.1:3000";
 1.创建Ajax对象
var xhr = null;
try {
  xhr = new XMLHttpRequest();
} catch (error) {
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
 2.调用open
xhr.open("post", `${baseUrl}/test`, true);
 必须在send方法之前设置请求头
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
/* post提交的数据需要通过send方法进行提交 */
 3.调用send
xhr.send("username=yyy&age=19");
 4.等待数据响应
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4) {
     判断状态码是否为200
    if (xhr.status == 200) {
      alert(xhr.responseText);
    } else {
      alert("Error:" + xhr.status);
    }
  }
};
```

**get**

```javascript
 1.创建Ajax对象
var xhr = null;
try {
  xhr = new XMLHttpRequest();
} catch (error) {
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
 2.调用open
xhr.open("get", `${baseUrl}/test?username=yyy&age=19`, true);
 3.调用send
xhr.send();
 4.等待数据响应
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4) {
     判断状态码是否为200
    if (xhr.status == 200) {
      alert(xhr.responseText);
    } else {
      alert("Error:" + xhr.status);
    }
  }
};
```

## 封装过程
首先将上次封装的函数移入Promise。

```javascript
function $ajax({ method = "get", url, header, data, success, error }) {
	return new Promise((resolve, reject) => {
		var xhr = null;
		try {
			xhr = new XMLHttpRequest();
		} catch (error) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		if (method == "get" && data) {
		  url += `?${data}`;
			data = '';
		  console.log(url);
		}
		xhr.open(method, url, true);
		if (header) {
		  for (const index in header) {
			  xhr.setRequestHeader(index, header[index]);
		  }
		} else {
		  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		}
		xhr.send(data);
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					if (success) {
						success(xhr.responseText);
					}
				} else {
					if (error) {
						error("Error" + xhr.status);
					}
				}
			}
		};
	})
}
```

我们可以看出因为Promise的特性，这个时候success和error就会可以换一种写法。

```javascript
xhr.onreadystatechange = () => {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			const res = xhr.responseText;
			try {
				success ? success(res) : resolve(res);
			} catch (err) {
				error ? error(err) : reject(err);
			}
		} else {
			error ? error(xhr.status) : reject(xhr.stauts);
		}
	}
};
```

现在的Ajax可以添加 `.then()` 和 `.catch()` 回调函数了，当然原本的 `success()` 和 `error()` 依旧可以使用，但是只能取一种方式使用。



