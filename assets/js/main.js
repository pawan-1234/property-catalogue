const $ = (s, r = document) => r.querySelector(s);
const inr = n => "₹ " + Number(n).toLocaleString("en-IN");
const grad = s => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) % 360; return `linear-gradient(135deg,hsl(${h} 38% 20%),hsl(${(h + 40) % 360} 42% 36%))`; };
const PAGES = [["index.html","Home"],["hotels.html","Hotels"],["destinations.html","Destinations"],["contact.html","About & Contact"]];

function chrome() {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = PAGES.map(([h, t]) => `<a href="${h}" class="${h === here ? "on" : ""}">${t}</a>`).join("");
  $("#top").innerHTML = `<div class="wrap"><a class="logo" href="index.html">travert<b>.in</b></a>
    <nav class="nav" id="nav">${links}</nav><a class="btn" href="hotels.html">Book Now</a>
    <button class="burger" id="burger" aria-label="Menu">☰</button></div>`;
  $("#burger").onclick = () => $("#nav").classList.toggle("open");
  $("#foot").innerHTML = `<div class="wrap"><div class="fcols">
    <div><div class="logo">travert<b>.in</b></div><p style="margin-top:12px">Book Domestic and International Hotels Online. Compare, choose and stay with confidence.</p></div>
    <div><h5>Explore</h5>${PAGES.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}</div>
    <div><h5>Hotels in Popular Cities</h5>${["Jaipur","Goa","Mumbai","Darjeeling"].map(c => `<a href="hotels.html?city=${encodeURIComponent(c)}">Hotels in ${c}</a>`).join("")}</div>
    <div><h5>Support</h5><a href="contact.html">Contact Us</a><a href="contact.html#faq">FAQs</a><a href="contact.html">Cancellation Policy</a></div></div>
    <div class="copy">© ${new Date().getFullYear()} travert.in. Sample listings and prices are for demonstration only.</div></div>`;
}

const pic = (p, label) => `<div class="pic" style="--g:${grad(p.name || p)}">${p.image ? `<img src="${p.image}" alt="${p.name}">` : label}</div>`;

function hotelCard(p) {
  const tax = Math.round(p.price * 0.12);
  return `<article class="hcard">${pic(p, p.type)}
    <div class="hbody"><span class="tag">${p.tag}</span><h3>${p.name}</h3>
      <div class="stars">${"★".repeat(p.stars)}</div><div class="loc">${p.city}</div>
      <div class="am">${p.am.map(a => `<span>${a}</span>`).join("")}</div>
      <div class="free">✓ Free Cancellation till 24 hrs before check-in</div></div>
    <div class="hprice"><div><span class="score">${p.rating}</span><small>${p.reviews.toLocaleString("en-IN")} ratings</small></div>
      <div><strong>${inr(p.price)}</strong><small>+ ${inr(tax)} taxes &amp; fees</small><small>per night</small></div></div></article>`;
}

function search() {
  const f = $("#search"); if (!f) return;
  const dl = $("#cities"); dl.innerHTML = DESTINATIONS.map(d => `<option value="${d.name}">`).join("");
  const t = new Date(), n = new Date(Date.now() + 864e5 * 2), iso = d => d.toISOString().slice(0, 10);
  f.cin.min = iso(t); f.cin.value = iso(t); f.cout.value = iso(n);
  f.onsubmit = e => { e.preventDefault(); location.href = `hotels.html?city=${encodeURIComponent(f.city.value)}&guests=${f.guests.value}`; };
}

function home() {
  if (!$("#home-tabs")) return;
  const types = ["Metros", "Heritage", "Beach", "Hills"];
  const draw = ty => { $("#home-dest").innerHTML = DESTINATIONS.filter(d => d.type === ty).map(d =>
    `<a class="dest pic" style="--g:${grad(d.name)}" href="hotels.html?city=${encodeURIComponent(d.name)}"><h3>${d.name}</h3>
     <p>${d.hotels.toLocaleString("en-IN")} Hotels · ${inr(d.avg)} avg. per night</p><small>View hotels →</small></a>`).join("");
    document.querySelectorAll("#home-tabs .tab").forEach(b => b.classList.toggle("on", b.dataset.t === ty)); };
  $("#home-tabs").innerHTML = types.map(t => `<button class="tab" data-t="${t}">${t}</button>`).join("");
  $("#home-tabs").onclick = e => e.target.dataset.t && draw(e.target.dataset.t);
  draw("Metros");
  $("#featured").innerHTML = PROPERTIES.slice(0, 3).map(hotelCard).join("");
  $("#quick").innerHTML = DESTINATIONS.map(d => `<li><a href="hotels.html?city=${encodeURIComponent(d.name)}">Hotels in ${d.name}</a></li>`).join("");
}

function hotels() {
  if (!$("#list")) return;
  const q = new URLSearchParams(location.search), st = { city: q.get("city") || "", type: [], star: [], max: 20000, sort: "pop" };
  const cities = [...new Set(PROPERTIES.map(p => p.city))].sort();
  $("#f-city").innerHTML = `<option value="">All destinations</option>` + cities.map(c => `<option>${c}</option>`).join("");
  $("#f-city").value = cities.includes(st.city) ? st.city : "";
  const render = () => {
    let r = PROPERTIES.filter(p => (!st.city || p.city === st.city) && (!st.type.length || st.type.includes(p.type)) &&
      (!st.star.length || st.star.includes(String(p.stars))) && p.price <= st.max);
    r.sort((a, b) => st.sort === "lo" ? a.price - b.price : st.sort === "hi" ? b.price - a.price : b.rating - a.rating);
    $("#h-title").textContent = st.city ? `Hotels in ${st.city}` : "Hotels in India";
    $("#count").textContent = `${r.length} properties found`;
    $("#max-v").textContent = inr(st.max);
    $("#list").innerHTML = r.length ? r.map(hotelCard).join("") : `<div class="empty"><h3>No properties match your filters</h3><p>Try a higher budget or clear a filter.</p></div>`;
  };
  document.querySelectorAll("[data-f]").forEach(el => el.onchange = el.oninput = () => {
    const k = el.dataset.f;
    if (el.type === "checkbox") { const a = st[k]; el.checked ? a.push(el.value) : a.splice(a.indexOf(el.value), 1); }
    else st[k === "price" ? "max" : k] = k === "price" ? +el.value : el.value;
    render();
  });
  render();
}

function destinations() {
  if (!$("#d-tabs")) return;
  const types = ["All", "Metros", "Heritage", "Beach", "Hills"];
  const draw = ty => { $("#d-grid").innerHTML = DESTINATIONS.filter(d => ty === "All" || d.type === ty).map(d =>
    `<a class="dest pic" style="--g:${grad(d.name)}" href="hotels.html?city=${encodeURIComponent(d.name)}"><h3>${d.name}</h3><p>${d.blurb}</p>
     <small>${d.hotels.toLocaleString("en-IN")} hotels · from ${inr(d.avg)}</small></a>`).join("");
    document.querySelectorAll("#d-tabs .tab").forEach(b => b.classList.toggle("on", b.dataset.t === ty)); };
  $("#d-tabs").innerHTML = types.map(t => `<button class="tab" data-t="${t}">${t}</button>`).join("");
  $("#d-tabs").onclick = e => e.target.dataset.t && draw(e.target.dataset.t);
  draw("All");
}

function contact() {
  const f = $("#contact"); if (!f) return;
  f.onsubmit = e => { e.preventDefault(); $("#thanks").style.display = "block"; f.reset(); };
}

document.addEventListener("DOMContentLoaded", () => { chrome(); search(); home(); hotels(); destinations(); contact(); });
