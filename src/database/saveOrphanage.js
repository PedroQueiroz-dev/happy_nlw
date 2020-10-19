
function saveOrphanage (db, orphanage){
return db.run(`
INSERT INTO orphanages (
    lat,
    lgn,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
) VALUES (
    "${orphanage.lat}",
    "${orphanage.lgn}",
    "${orphanage.name}",
    "${orphanage.about}",
    "${orphanage.whatsapp}",
    "${orphanage.images}",
    "${orphanage.instructions}",
    "${orphanage.opening_hours}",
    "${orphanage.open_on_weekends}"
);

`)
}

module.exports = saveOrphanage;