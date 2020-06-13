import api from "../../api";

const state = {
  photoFlag: false
};

const mutations = {
  setFlag(state, params) {
    state.photoFlag = params;
  }
};

const actions = {
  async updateImg({ commit }, params) {
    var modelImgUrl = "";

    var formdata = new FormData();
    formdata.append("image", params);

    // var myHeaders = new Headers({
    //     "access-control-allow-origin": "*"
    // });
    // var requestOptions = {
    //   method: "POST",
    //   body: formdata,
    //   redirect: "follow",
    //   headers: myHeaders
    // };
    await api.uploadImage(formdata)
    // await fetch("https://k02d1081.p.ssafy.io:8009/api/upload_image", requestOptions)
    // await fetch("http://127.0.0.1:8000/api/upload_image", requestOptions)
      .then(response => response.text())
      .then(async result => {
        const test = JSON.parse(result);
        modelImgUrl = test;
        params = {
          profile_url: modelImgUrl
        };
        await api.changeProfilePic(params);
        localStorage.setItem("image", modelImgUrl);
        commit("setFlag", state.photoFlag === false ? true : false);
      });
  },
  async updateInfo({ commit }, params) {
    commit;
    const resp = await api.updateUserInfo(params).then(res => res.data);
    return resp;
  },
  async deleteImg({ commit }, params) {
    const imgUrl = null;
    params = {
      profile_url: imgUrl
    };
    await api.changeProfilePic(params);
    localStorage.setItem("image", imgUrl);
    commit("setFlag", state.photoFlag === false ? true : false);
  },
  async getPartsFromLegoRail({ commit }) {
    commit;
    const resp = await api.getPartsFromLegoRail();
    const items = resp.data;
    return items;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
