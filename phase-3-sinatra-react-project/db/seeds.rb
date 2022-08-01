puts "🌱 Seeding spices..."

#city
c1 = City.create(name: "New York")
c2 = City.create(name: "Chicago")

#activities
a1 = Activity.create(museum: "MOMA", restaurant: "Raos", park: "Central Park", misc: "shopping", city_id: c1.id)
a2 = Activity.create(museum: "Art Institute", restaurant: "Giodornos", park: "Millenium Park", misc: "architecture tour", city_id: c2.id)


puts "✅ Done seeding!"
