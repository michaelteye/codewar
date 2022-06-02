// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

// input
// Two arrays are given :

// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :

// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :

// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)




function solution([m1, m2, r], [x, y, z]) {
    let md = {"kg":1, "g":1e-3, "mg":1e-6, "μg":1e-9, "lb":0.453592};
    let rd = {"m":1, "cm":1e-2, "mm":1e-3, "μm":1e-6, "ft":0.3048};
    m1 *= md[x];
    m2 *= md[y];
    r *= rd[z];
    return 6.67e-11 * m1 * m2 / (r**2);
  }