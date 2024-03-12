const fs = require("fs");
const { Hercai } = require('hercai');
const path = require('path');
const herc = new Hercai();
const axios = require("axios");
const cherrio = require("cheerio");
const { remini } = require('betabotz-tools');

const express = require("express");

const app = express();
app.use(express.json());

const port = 8080;

app.get("/simpleapi", async function (req, res) {
  const html = fs.readFileSync("eurix/index.html", "utf8");

  res.send(html);
});



app.get("/", async function (req, res) {
  const html = fs.readFileSync("eurix/contact.html", "utf8");

  res.send(html);
});


app.post("/link", async function (req, res) {
  try {
    res.json({
      link: [
        "https://vt.tiktok.com/ZSFfsnYKy/",
        "https://vt.tiktok.com/ZSFfsQUkT/",
        "https://vt.tiktok.com/ZSFfsQ6ng/",
        "https://vt.tiktok.com/ZSFfswAw2/",
        "https://vt.tiktok.com/ZSFfsK1aE/",
        "https://vt.tiktok.com/ZSFfs96Ce/",
        "https://vt.tiktok.com/ZSFfsCMGW/",
        "https://vt.tiktok.com/ZSFfsgs9N/",
        "https://vt.tiktok.com/ZSFfsm4d9/",
        "https://vt.tiktok.com/ZSFfsvGoL/",
        "https://vt.tiktok.com/ZSFfs31yX/",
        "https://vt.tiktok.com/ZSFfs7q4h/",
        "https://vt.tiktok.com/ZSFfsgHCy/",
        "https://vt.tiktok.com/ZSFfs3vgR/",
        "https://vt.tiktok.com/ZSFfsQy8T/",
        "https://vt.tiktok.com/ZSFfsGjxf/",
        "https://vt.tiktok.com/ZSFfsQtbu/",
        "https://vt.tiktok.com/ZSFfsCrLe/",
        "https://vt.tiktok.com/ZSFfsvb67/",
        "https://vt.tiktok.com/ZSFfsp1xc/",
        "https://vt.tiktok.com/ZSFfs3aGa/",
        "https://vt.tiktok.com/ZSFfsp77C/",
        "https://vt.tiktok.com/ZSFfsHMYT/",
        "https://vt.tiktok.com/ZSFfsWNG3/",
        "https://vt.tiktok.com/ZSFfsVsuk/",
        "https://vt.tiktok.com/ZSFfssn9u/",
        "https://vt.tiktok.com/ZSFfs3t6w/",
        "https://www.tiktok.com/@editor_ni_bianca_56/video/7288446566031985926",
        "https://vt.tiktok.com/ZSFfsXfnn/",
        "https://vt.tiktok.com/ZSFfsncjn/",
        "https://vt.tiktok.com/ZSFfsHDtB/",
        "https://vt.tiktok.com/ZSFfs98hH/",
        "https://vt.tiktok.com/ZSFfsqsQC/",
        "https://vt.tiktok.com/ZSFfGFESX/",
        "https://vt.tiktok.com/ZSFfGrSJS/",
        "https://vt.tiktok.com/ZSFfG6UE3/",
        "https://vt.tiktok.com/ZSFfGyh2r/",
        "https://vt.tiktok.com/ZSFfGRUSa/",
        "https://vt.tiktok.com/ZSFfGU4Eb/",
        "https://vt.tiktok.com/ZSFfGSGGC/",
        "https://vt.tiktok.com/ZSFfGDd4d/",
        "https://vt.tiktok.com/ZSFfG26J9/",
        "https://vt.tiktok.com/ZSFfGDU3x/",
        "https://vt.tiktok.com/ZSFfsoTq5/",
        "https://vt.tiktok.com/ZSFfsEoga/",
        "https://vt.tiktok.com/ZSFfGDsNM/",
        "https://vt.tiktok.com/ZSFfGdKrF/",
        "https://vt.tiktok.com/ZSFfGFNU5/",
        "https://vt.tiktok.com/ZSFfGDCWd/",
        "https://vt.tiktok.com/ZSFfG8FVD/",
        "https://vt.tiktok.com/ZSFfG1gJW/",
        "https://vt.tiktok.com/ZSFfG13qG/",
        "https://vt.tiktok.com/ZSFfGr6DK/",
        "https://vt.tiktok.com/ZSFfGhwN5/",
        "https://vt.tiktok.com/ZSFfGkNq6/",
        "https://vt.tiktok.com/ZSFfG2tA9/",
        "https://vt.tiktok.com/ZSFfGD9Bd/",
        "https://vt.tiktok.com/ZSFfGYLeJ/",
        "https://vt.tiktok.com/ZSFfGLjde/",
        "https://vt.tiktok.com/ZSFfGYgJx/",
        "https://vt.tiktok.com/ZSFfG1cV1/",
        "https://vt.tiktok.com/ZSFfG81yv/",
        "https://vt.tiktok.com/ZSFfGJrEV/",
        "https://vt.tiktok.com/ZSFfGjJqj/",
        "https://vt.tiktok.com/ZSFfG6cwd/",
        "https://vt.tiktok.com/ZSFfGPxF9/",
        "https://vt.tiktok.com/ZSFfGbheo/",
        "https://vt.tiktok.com/ZSFfGpcVJ/",
        "https://vt.tiktok.com/ZSFfGsuD9/",
        "https://vt.tiktok.com/ZSFfGHAG3/",
        "https://vt.tiktok.com/ZSFfGHEwc/",
        "https://vt.tiktok.com/ZSFfGxeoQ/",
        "https://vt.tiktok.com/ZSFfGX76q/",
        "https://vt.tiktok.com/ZSFfGCan6/",
        "https://vt.tiktok.com/ZSFfGm2Kr/",
        "https://vt.tiktok.com/ZSFfG4gbj/",
        "https://vt.tiktok.com/ZSFfG5uLn/",
        "https://vt.tiktok.com/ZSFfG9MDy/",
        "https://vt.tiktok.com/ZSFfGg43L/",
        "https://vt.tiktok.com/ZSFfGbQkf/",
        "https://vt.tiktok.com/ZSFfG5ubD/",
        "https://vt.tiktok.com/ZSFfGWvas/",
        "https://vt.tiktok.com/ZSFfGHEwD/",
        "https://vt.tiktok.com/ZSFfGvmxX/",
        "https://vt.tiktok.com/ZSFfGattB/",
        "https://vt.tiktok.com/ZSFfGsmK5/",
        "https://vt.tiktok.com/ZSFfGPmWB/",
        "https://vt.tiktok.com/ZSFfGnemV/",
        "https://vt.tiktok.com/ZSFfGamak/",
        "https://vt.tiktok.com/ZSFfGvWam/",
        "https://www.tiktok.com/@dlmrnvls/video/7294492622809255174",
        "https://vt.tiktok.com/ZSFfGPs71/",
        "https://vt.tiktok.com/ZSFfGP5Cm/",
        "https://vt.tiktok.com/ZSFfGvJaA/",
        "https://vt.tiktok.com/ZSFfGmbjA/",
        "https://vt.tiktok.com/ZSFfGq3BF/",
        "https://vt.tiktok.com/ZSFfGVETK/",
        "https://vt.tiktok.com/ZSFfGGabs/",
        "https://vt.tiktok.com/ZSFfGH5J1/",
        "https://vt.tiktok.com/ZSFfGPkq1/",
        "https://vt.tiktok.com/ZSFfGpqoR/",
        "https://vt.tiktok.com/ZSFfGWd9m/",
        "https://vt.tiktok.com/ZSFfG9Ffc/",
        "https://vt.tiktok.com/ZSFfG5wAK/",
        "https://vt.tiktok.com/ZSFfGtM9X/",
        "https://vt.tiktok.com/ZSFfGuyFn/",
        "https://vt.tiktok.com/ZSFfGaTg8/",
        "https://vt.tiktok.com/ZSFfGGvvk/",
        "https://vt.tiktok.com/ZSFfGasrq/",
        "https://vt.tiktok.com/ZSFfGxJEY/",
      ],
    });
  } catch (error) {
    res.json({ error: "error fetching link" });
    console.error(error);
  }
});



app.get('/gpt4', async (req, res) => {
  const ask = req.query.ask;

  if (!ask) {
    res.json({ error: "Please provide 'ask' parameter" });
    return;
  }

  try {
    const answer = await herc.question({ model: "v1", content: ask });
    res.json({ answer: answer.reply });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/meme", async function (req, res) {
  try {
    const gen = await axios.get("https://meme-api.com/gimme");

    res.send(gen.data);
  } catch (error) {
    console.error("Error fetching meme:", error);

    res.status(500).send("Error fetching meme");
  }
});



app.get("/api/tiktokdl/tools", async (req, res) => {
  const link = req.query.link;
  if (!link) {
    res.json({ error: "Please provide a TikTok video link." });
  } else {
    try {
      const response = await axios.post("https://www.tikwm.com/api/?hd=1", {
        url: link,
      });
const username = response.data.data.author.unique_id
const url = response.data.data.play
const nickname = response.data.data.author.nickname
const title = response.data.data.title
const like = response.data.data.digg_count
const comment = response.data.data.comment_count

res.json({username: username, nickname: nickname, url: url, title: title, like: like, comment: comment});
console.log(response.data)
      
    } catch (error) {
      // handle error
      console.error(error);
      res.status(500).send("An error occurred");
    }
  }
});

app.get("/api/tiksearch/tools", async (req, res) => {
  try {
    const search = req.query.search;

    if (!search) {
      return res.json({ error: "Missing data to launch the program" });
    }

    const response = await axios.post("https://www.tikwm.com/api/feed/search", {
      keywords: search,
    });

    const data = response.data;

    if (data.data && data.data.videos && data.data.videos.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.data.videos.length);

      const randomVideo = data.data.videos[randomIndex];

      const result = {
        code: 0,

        msg: "success",

        processed_time: 0.9624,

        data: {
          videos: [randomVideo],
        },
      };

      return res.json(result);
    } else {
      return res.json({ error: "No videos found" });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/api/sim/tools", async (req, res, error) => {
  try {
    let path = `./sim.json`;
    let dataa = JSON.parse(fs.readFileSync(path));
    let tete = req.query.ask;

    if (tete === "Eugene") {
      return res.json({ respond: "handsome" });
    }
  if (tete == "eugene") {
    return res.json({ respond: "pogi"
    });
     }

    var dataaa = dataa[tete][Math.floor(Math.random() * dataa[tete].length)];

    res.json({
      respond: dataaa,
    });
  } catch (err) {
    console.error(err);
    return res.json({
     respond: "I don't understand what your saying please teach me.",
  });
    }
});

app.get("/api/teach/tools", async (req, res) => {
  let ask = req.query.ask;

  let ans = req.query.ans;

  if (!ask || !ans) return res.json({ err: "Missing ans or ask query!" });

  let path = `./sim.json`;

  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));

  let dataa = JSON.parse(fs.readFileSync(path));

  if (!dataa[ask]) dataa[ask] = [];

  res.json({
    ask: ask,

    ans: ans,
  });

  dataa[ask].push(ans);

  fs.writeFileSync(path, JSON.stringify(dataa, null, 4));
});

app.get("/pinterest", async (req, res) => {
  var search = req.query.search;

  if (!search) return res.json({ error: "Missing search query!✨" });

  var headers = {
    authority: "www.pinterest.com",

    "cache-control": "max-age=0",

    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",

    "upgrade-insecure-requests": "1",

    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",

    "sec-gpc": "1",

    "sec-fetch-site": "same-origin",

    "sec-fetch-mode": "same-origin",

    "sec-fetch-dest": "empty",

    "accept-language": "en-US,en;q=0.9",

    cookie:
      'csrftoken=92c7c57416496066c4cd5a47a2448e28; g_state={"i_l":0}; _auth=1; _pinterest_sess=TWc9PSZBMEhrWHJZbHhCVW1OSzE1MW0zSkVid1o4Uk1laXRzdmNwYll3eEFQV0lDSGNRaDBPTGNNUk5JQTBhczFOM0ZJZ1ZJbEpQYlIyUmFkNzlBV2kyaDRiWTI4THFVUWhpNUpRYjR4M2dxblJCRFhESlBIaGMwbjFQWFc2NHRtL3RUcTZna1c3K0VjVTgyejFDa1VqdXQ2ZEQ3NG91L1JTRHZwZHNIcDZraEp1L0lCbkJWUytvRis2ckdrVlNTVytzOFp3ZlpTdWtCOURnbGc3SHhQOWJPTzArY3BhMVEwOTZDVzg5VDQ3S1NxYXZGUEEwOTZBR21LNC9VZXRFTkErYmtIOW9OOEU3ektvY3ZhU0hZWVcxS0VXT3dTaFpVWXNuOHhiQWdZdS9vY24wMnRvdjBGYWo4SDY3MEYwSEtBV2JxYisxMVVsV01McmpKY0VOQ3NYSUt2ZDJaWld6T0RacUd6WktITkRpZzRCaWlCTjRtVXNMcGZaNG9QcC80Ty9ZZWFjZkVGNURNZWVoNTY4elMyd2wySWhtdWFvS2dQcktqMmVUYmlNODBxT29XRWx5dWZSc1FDY0ZONlZJdE9yUGY5L0p3M1JXYkRTUDAralduQ2xxR3VTZzBveUc2Ykx3VW5CQ0FQeVo5VE8wTEVmamhwWkxwMy9SaTNlRUpoQmNQaHREbjMxRlRrOWtwTVI5MXl6cmN1K2NOTFNyU1cyMjREN1ZFSHpHY0ZCR1RocWRjVFZVWG9VcVpwbXNGdlptVzRUSkNadVc1TnlBTVNGQmFmUmtrNHNkVEhXZytLQjNUTURlZXBUMG9GZ3YwQnVNcERDak16Nlp0Tk13dmNsWG82U2xIKyt5WFhSMm1QUktYYmhYSDNhWnB3RWxTUUttQklEeGpCdE4wQlNNOVRzRXE2NkVjUDFKcndvUzNMM2pMT2dGM05WalV2QStmMC9iT055djFsYVBKZjRFTkRtMGZZcWFYSEYvNFJrYTZSbVRGOXVISER1blA5L2psdURIbkFxcTZLT3RGeGswSnRHdGNpN29KdGFlWUxtdHNpSjNXQVorTjR2NGVTZWkwPSZzd3cwOXZNV3VpZlprR0VBempKdjZqS00ybWM9; _b="AV+pPg4VpvlGtL+qN4q0j+vNT7JhUErvp+4TyMybo+d7CIZ9QFohXDj6+jQlg9uD6Zc="; _routing_id="d5da9818-8ce2-4424-ad1e-d55dfe1b9aed"; sessionFunnelEventLogged=1',
  };

  var options = {
    url:
      "https://www.pinterest.com/search/pins/?q=" +
      search +
      "&rs=typed&term_meta[]=" +
      search +
      "%7Ctyped",

    headers: headers,
  };

  try {
    const response = await axios.get(options.url, { headers: headers });

    const arrMatch = response.data.match(
      /https:\/\/i\.pinimg\.com\/originals\/[^.]+\.jpg/g,
    );

    return res.json({
      count: arrMatch.length,

      data: arrMatch,
    });
  } catch (error) {
    console.error(error);

    res.json({ error: "An error occurred while fetching data" });
  }
});

app.get("/imgur", async (req, res, next) => {
  var request = require("request");

  var link = req.query.link;

  if (!link) return res.json({ error: "missing image query" });

  var options = {
    method: "POST",

    url: "https://api.imgur.com/3/image",

    headers: {
      Authorization: "Client-ID fc9369e9aea767c",
    },

    formData: {
      image: link,
    },
  };

  request(options, function (error, response) {
    if (error) return res.json({ error: "Error na bai maya naman" });

    var upload = JSON.parse(response.body);

    res.json({ uploaded: { status: "success", image: upload.data.link } });
  });
});

app.get("/tikstalk", async (req, res, next) => {
  var user = req.query.username;

  if (!user) return res.json({ error: "missing user query!!" });

  var axios = require("axios");

  axios({
    method: "post",

    url: "https://www.tikwm.com/api/user/info?unique_id=@",

    data: {
      unique_id: user,
    },
  })
    .then(function (response) {
      var data = response.data.data;

      console.log(data);

      return res.json({
        id: data.user.id,

        nickname: data.user.uniqueId,

        username: data.user.nickname,

        avatarLarger: data.user.avatarLarger,

        signature: data.user.signature,

        secUid: data.user.secUid,

        relation: data.user.relation,

        bioLink: data.user.bioLink,

        videoCount: data.stats.videoCount,

        followingCount: data.stats.followingCount,

        followerCount: data.stats.followerCount,

        heartCount: data.stats.heartCount,

        diggCount: data.stats.diggCount,
      });
    })

    .catch(function (error) {
      return res.json({ error });
    });
});

app.get("/girledit", async (req, res, next) => {
  let key = "alighmotion";
  let apikey = req.query.apikey;

  if (!apikey || apikey !== key) {
    return res.json({
      error:
        "⚠️ Invalid API key. Contact https://www.facebook.com/eurix.pogi901 to get the correct API key!",
    });
  }

  try {
    const eugene = [
      "chescaeditzofficial6",
      "jomar_edit_girl_19",
      "inday_melody07",
      "xy_iyra12",
      "jc_zyro",
      "johnpaul_editz",
    ];

    const random = eugene[Math.floor(Math.random() * eugene.length)];
    const gen = await axios.get(
      `https://eurix-api.replit.app/api/tiksearch/tools?search=${random}`,
    );

    res.send(gen.data);
  } catch (error) {
    res.json({
      error:
        "⚠️ An error occurred while fetching the video URL. Please try again later.",
    });
  }
});

app.get("/uptimerobot/create", async (req, res, next) => {
  var name = req.query.name || Date.now();
  var url = req.query.url;
  if (!url)
    return res.json({
      error: "thiếu url!",
    });
  var request = require("request");

  var options = {
    method: "POST",
    url: "https://api.uptimerobot.com/v2/newMonitor",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
    },
    form: {
      api_key: "u2008156-9837ddae6b3c429bd0315101",
      format: "json",
      type: "1",
      url: url,
      friendly_name: name,
    },
  };

  request(options, function (error, response, body) {
    if (error) return res.json({ error });
    if (JSON.parse(body).stat == "fail")
      return res.json({ error: "lỗi, màn hình này đã tồn tại!" });
    var data = JSON.parse(body).monitor;
    return res.json({
      data,
    });
  });
});

app.get("/tinyurl", async (req, res, next) => {
  var url = req.query.url;
  if (!url) {
    return res.json({ error: "Thiếu dữ liệu để khởi chạy chương trình" });
  }
  axios({
    method: "post",
    url: "https://tinyurl.com/api-create.php?url=",
    data: {
      url: url,
    },
  })
    .then(function (response) {
      var data = response.data;
      return res.json({ url: data, author: "Eugene Aguilar" });
    })
    .catch(function (error) {
      return res.json({ error: "Error: " + error });
    });
});

app.get('/api/facebokdl/tools', async (req, res) => {
	  const url = req.query.link;

	  if (!url) {
		 res.json({ error: "Please provide a Facebook video link." });
		 return; 
	  }

	  try {
		 const response = await axios.get(`https://tools.betabotz.org/tools/facebookdl?url=${url}`);
		 const videoUrl = response.data.result.hd_q;
		 const title = response.data.result.title;
		 const author = "Eugene Aguilar";
		 res.json({ url: videoUrl, title: title, author: author });
	  } catch (error) {
		 res.json({ error: "Error fetching Facebook video details." });
	  }
	});




app.get("/anh18", function (req, res) {
    const anh18 = ["https://i.imgur.com/Kopaq4l.jpeg", "https://i.imgur.com/FUAPqub.jpeg",
              "https://i.imgur.com/UNN2tWV.jpeg","https://i.imgur.com/YxLGdzR.jpeg"];
    const random = Math.floor(Math.random() * anh18.length);
    res.send({ link: anh18[random], author: "Eugene"  });
});

app.post("/shoti", async (req, res) => {
  let key = ["eugeneaguilar89", "eurixhiyoshi01", "omsimnida", "mamaw"];
  let apikey = req.body.apikey;
  
  if (!apikey || !key.includes(apikey)) {
    return res.send({ error: "Invalid apikey contact: https://www.facebook.com/eurix.91 this to get the apikey!!"});
  }

  try {
    const response = await axios.post(`https://shoti-srv1.onrender.com/api/v1/get`, { apikey: "$shoti-1hnmk903v8bod9kt9sg" });
    const userInfo = response.data.data.user;
    const username = userInfo.username;
    const nickname = userInfo.nickname;
    const video = response.data.data.url;

    res.send({ username, nickname, url: video, rank: "Legendary Top" });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.message);
  res.status({url: "https://i.imgur.com/9NuXnWc.mp4", username: "☕", nickname: "women", rank: "kalibugan"});
  }
});


app.get('/remini', async (req, res) => {
	 try {
		  const inputImage = req.query.input;

		  if (!inputImage) {
				return res.status(400).send({ error: 'Missing input image URL'});
		  }

		  const result = await remini(inputImage);
		  res.send(result);
	 } catch (error) {
		  console.error('Error calling Remini API:', error.message);
		  res.status(error.response?.status || 500).send({
				error: 'Internal Server Error',
				details: error.message,
		  });
	 }
});

app.get("/api/cupcutdl/tools", async (req, res) => {
  const { url } = req.query;
  if (!url) {
	 return res.json({ error: "Please provide a link from CupCut." });
  }

  try {
	 const response = await axios.get(`https://tools.betabotz.org/tools/capcutdl?url=${url}`);
	 const videoUrl = response.data.result.video_ori;
	 const title = response.data.result.title;
	 const desc = response.data.result.description;
	 const like = response.data.result.digunakan;

	 res.json({
		url: videoUrl,
		title: title,
		description: desc,
		like: like,
		author: "Eugene Aguilar"
	 });
  } catch (error) {
	 res.json({ error: "Error fetching video data" });
  }
});

app.get('/api/facebokdl/tools', async (req, res) => {
  const url = req.query.link;
  
  if (!url) {
    res.json({ error: "Please provide a Facebook video link." });
    return; // Added to exit the function early in case of missing URL
  }

  try {
    const response = await axios.get(`https://tools.betabotz.org/tools/facebookdl?url=${url}`);
    const videoUrl = response.data.result.hd_q;
    const title = response.data.result.title;
    const author = "Eugene Aguilar";
    res.json({ url: videoUrl, title: title, author: author });
  } catch (error) {
    res.json({ error: "Error fetching Facebook video details." });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
