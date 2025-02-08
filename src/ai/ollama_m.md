---

category:
  - 教程
  - ollama

tag:
  - AI
  - 模型
  - ollama
  - 人工智能

date: 2025-02-03

star: true

---

# Ollama手机端（安卓）部署并运行DeepSeek大模型

> [!tip]
> [点击省流开始](#部署教程)

## Ollama简介

### ollama是什么
Ollama 是一个开源的轻量级框架，旨在帮助用户在本地计算机上快速部署和运行大型语言模型（LLMs），例如 Meta 的 **Llama**、微软的 **Phi-2**、**Mistral** 等。它通过简化的命令行工具和 API，降低了在本地运行复杂模型的配置门槛，尤其适合开发者和研究人员进行模型测试、定制化开发或隐私敏感场景。

### ollama核心功能

1. **本地运行模型**  
   无需依赖云服务，直接在个人电脑（支持 macOS、Linux、Windows）上运行多种开源 LLM。
   
2. **一键式模型管理**  
   通过类似 `ollama run llama2` 的命令直接下载和启动模型，自动处理依赖和环境配置。

3. **热加载与多模型支持**  
   可同时加载多个模型，并根据需求快速切换，支持自定义模型微调（需结合脚本或插件）。

4. **REST API 集成**  
   提供 API 接口，方便与其他应用（如聊天机器人、自动化工具）集成，实现本地化 AI 功能。

5. **资源优化**  
   针对 CPU/GPU 资源进行优化，部分模型支持量化版本，降低内存和显存占用。

::: right
*以上内容由DeepSeek编写*
:::

## DeepSeek简介

### DeepSeek是什么

DeepSeek1 是一种基于人工智能大模型，旨在通过自然语言处理和机器学习技术，提供更加精准和高效的问答体验。它能够理解用户的查询意图，甚至在模糊和复杂的情况下，也能通过上下文分析提供相关结果。

### 主要特点

1. **自然语言理解**
   - 采用先进的自然语言处理技术，能够理解和解析复杂的查询，不仅依赖于关键词，还能识别查询背后的意图。
   
2. **个性化推荐**
   - 根据用户的历史行为、偏好和兴趣，DeepSeek1 提供个性化的搜索结果，确保每个用户都能得到最相关的信息。
   
3. **语义搜索**
   - 深入分析查询的语义，超越传统的基于关键词的匹配方式，提供更加智能和符合实际需求的答案。
   
4. **高效的结果排序**
   - 利用深度学习算法对网页内容进行优先排序，使得结果展示更加精准，减少冗余信息。
   
5. **多模态支持**
   - 支持文字、语音、图像等多种输入方式，用户可以根据需求选择不同的搜索方式。
   
6. **实时更新**
   - 搜索结果实时更新，确保用户获得最新的信息和动态。

::: right
*以上内容由ChatGpt编写*
:::

-----

ok啊废话终于说完了（bushi ，我就不再多哔哔，正片开始。

## 部署教程

### 所需内容

1. 一部安卓手机
2. Wifi环境（可选，推荐）
3. 至少5G的储存空间

### 安装环境

众所周知，ollama只支持MacOS，Windows，Linux系统，并没有直接提供安卓版本的软件。但是没关系，我们可以通过安卓端的Linux虚拟机来~~套娃~~安装运行ollama，Termux就是一个很好的工具。

#### 安装[Termux](https://termux.dev/cn/)

> [!tip]
> [从逸燧资源库下载（v0.118.1）](https://mirror.escateam.icu/%E8%BD%AF%E4%BB%B6/Android/%E6%A8%A1%E6%8B%9F%E5%99%A8/com.termux_1000.apk)

#### 使用Tmoe安装Linux发行版系统

> [!note]
> 本教程中安装`debian12`进行演示，您也可以挑选自己喜欢的系统

使用以下命令安装tmoe容器

```bash
bash -c "$(curl -L gitee.com/mo2/linux/raw/2/2)"
```

然后会出现下面的提示

![picture_tmoe1.jpg](/img/TOME/picture_tmoe1.jpg)
出现这个界面填 `Y` 并 `回车` [注意是大写 Y]

<hr/>

然后会出现下面的界面

![picture_tmoe2.jpg](/img/TOME/picture_tmoe2.jpg)

出现这个界面填 `y` 并 `回车` [注意是小写 y]

<hr/>

然后会出现下面的提示
有以下两种情况

如果提示的是

**Do you want to get it from `gitee`? [Y/n]**

则填 `Y` 然后 `回车` [注意是大写 Y]

而如果提示的是

**Do you want to get it from `github`? [Y/n]**

则填 `n` 然后 `回车` [注意是小写的 n]

<hr/>

然后会出现下面的提示

![picture_tmoe3.jpg](/img/TOME/picture_tmoe3.jpg)

出现这个提示,请直接 `回车`

<hr/>

然后会让你选择语言

![picture_tmoe4.jpg](/img/TOME/picture_tmoe4.jpg)

这里默认就是简体中文 `直接回车`

<hr/>

然后就是选择容器类型

![picture_tmoe5.jpg](/img/TOME/picture_tmoe5.jpg)

我们要选择第一个 `🍀 proot容器(๑•̀ㅂ•́)و✧`

它默认就是proot容器 所以 `直接回车`

<hr/>

然后会提示

![picture_tmoe6.jpg](/img/TOME/picture_tmoe6.jpg)

`回车继续` 它会克隆一份项目库

<hr/>

然后可能会提示这个

![picture_tmoe_1.jpg](/img/TOME/picture_tmoe_1.jpg)

出现这个提示填 `Y` 然后 `回车` [注意是大写 Y ]

然后它就会自动更换termux软件包下载源

<hr/>

然后会提示

![picture_tmoe8.jpg](/img/TOME/picture_tmoe8.jpg)

出现这个提示 填 `Y` 并 `回车` [注意是大写 Y]

> [!tip]
> 这种情况可能有好多次，都是填大写的`Y`然后回车

<hr/>

然后会弹出这个提示

![picture_tmoe9.jpg](/img/TOME/picture_tmoe9.jpg)

直接回车

<hr/>

然后就开始克隆项目库和安装依赖

跑完了会出现这个界面

![picture_tmoe10.jpg](/img/TOME/picture_tmoe10.jpg)

我们要选择第一个 也就是 `🍀 proot容器(๑•̀ㅂ•́)و✧`

它默认就是proot容器 所以 `直接回车`

<hr/>

然后会让你选终端配色

![picture_tmoe11.jpg](/img/TOME/picture_tmoe11.jpg)

这里给出翻译

1. 霓虹的

2. 深色的

3. 青色的

4. 光亮的

5. 橙色的

6. miu[为什么没翻译？因为我也不知道是什么意思]

7. 紫色的

0. 跳过

用小键盘的↑↓键来选择，移动到自己喜欢的主题，然后回车

推荐 `2`

<hr/>

然后会让你选择终端字体

![picture_tmoe12.jpg](/img/TOME/picture_tmoe12.jpg)

看个人喜好
推荐 `1`
用小键盘的↑↓键来选择，移动到自己喜欢的字体，然后回车

<hr/>

然后会询问要不要修改小键盘

![picture_tmoe13.jpg](/img/TOME/picture_tmoe13.jpg)

用小键盘的← →键来选择
移动到 `Yes`，然后回车。
因为它默认是Yes 所以可以`直接回车`

`注意:这里可能会闪退一下 重新进就行`

<hr/>

然后会让你选择dns

![picture_tmoe14.jpg](/img/TOME/picture_tmoe14.jpg)

用小键盘的↑↓键来选择 移动到 `[2400:3200::1](Ali) `

也就是序号为 4 的那个 选择好后 `直接回车`

![picture_tmoe15.jpg](/img/TOME/picture_tmoe15.jpg)

出现这个提示 `直接回车`

<hr/>

然后会询问你 是否需要启用一言？♪(^∇^*)

![picture_tmoe16.jpg](/img/TOME/picture_tmoe16.jpg)

用小键盘的← →键来选择 移动到 `No` 然后 `回车`

<hr/>

然后会询问你的时区

![picture_tmoe17.jpg](/img/TOME/picture_tmoe17.jpg)

只要你在中国的，就选 `Yes` 然后 `回车`

<hr/>

然后会出现下面的界面

![picture_tmoe18.jpg](/img/TOME/picture_tmoe18.jpg)

这里 `直接回车`

然后可能会提示如图的信息

![picture_tmoe19.jpg](/img/TOME/picture_tmoe19.jpg)

请 `直接回车`

<hr/>

然后会出现下面的界面

![picture_tmoe20.jpg](/img/TOME/picture_tmoe20.jpg)

询问挂载目录 请 `直接回车`

然后会出现以下提示

![picture_tmoe21.jpg](/img/TOME/picture_tmoe21.jpg)

请 `直接回车`

<hr/>

然后让你阅读用户协议

![picture_tmoe22.jpg](/img/TOME/picture_tmoe22.jpg)

请 认真阅读之后 `回车`

<hr/>

然后会出现这个界面

![picture_tmoe23.jpg](/img/TOME/picture_tmoe23.jpg)

这里我们要选择 `💠 arm64发行版列表`

然后 `回车`

<hr/>

然后会出现这个界面

![picture_tmoe24.jpg](/img/TOME/picture_tmoe24.jpg)

用小键盘的↑↓键来选择  `Debian:致力于自由`

然后 `回车`

<hr/>

然后会出现这个界面

![picture_tmoe25.jpg](/img/TOME/picture_tmoe25.jpg)

用小键盘的↑↓键来选择 `12-bookworm(2023~2028,书虫一熊抱哥的手下)`，然后 `回车`

<hr/>

然后会出现如下界面

![picture_tmoe26.jpg](/img/TOME/picture_tmoe26.jpg)

用小键盘的↑↓键来选择 `1`，然后 `回车`

<hr/>

出现如下界面时继续`回车`

![picture_tmoe27.jpg](/img/TOME/picture_tmoe27.jpg)

<hr/>

然后会出现此界面

![picture_tmoe28.jpg](/img/TOME/picture_tmoe28.jpg)

选择`否`

<hr/>

![picture_tmoe29.jpg](/img/TOME/picture_tmoe29.jpg)

选择`否`

<hr/>

![picture_tmoe30.jpg](/img/TOME/picture_tmoe30.jpg)

选择`是`

<hr/>

接下来会询问是否`是否需要启动tmoe tools?`

![picture_tmoe31.jpg](/img/TOME/picture_tmoe31.jpg)

选择`否`

<hr/>

出现这个界面就代表你已顺利进入了Linux虚拟机中

![picture_tmoe32.jpg](/img/TOME/picture_tmoe32.jpg)

> [!tip]
> 以后再次进入该虚拟机（容器）与上述步骤相同，只需要在启动`termux`后输入 `tmoe` 启动tmoe工具。

#### 安装ollama

执行以下命令

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

> [!tip]
> 如果下载速度过慢，可以使用以下命令 <br />
> ```bash
  curl -fsSL https://escaped.icu/shell/ollama.sh | sh
  ```

