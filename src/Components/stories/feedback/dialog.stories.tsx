import type { Meta, StoryObj } from '@storybook/react'

import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog'

import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from '../../ui/button'

const meta: Meta<typeof Dialog> = {
    component: Dialog,
    title: 'Design System/FeedBack/Dialog',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    '<h4>A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: args => (
        <Dialog {...args}>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <div className="flex flex-col">
                        <p>
                            Quae molestias temporibus illum voluptatum doloremque quasi, dolorum, quos nihil consectetur earum odit? Optio minus
                            consectetur blanditiis placeat sunt. Quibusdam dignissimos exercitationem veniam porro, eaque earum officia voluptas optio
                            in saepe, sit odit. Mollitia sed quaerat magnam quos? Corporis fugit aperiam commodi incidunt. Corrupti architecto
                            reiciendis voluptatum nam ipsa. Error reiciendis in ducimus sed assumenda fugiat praesentium fugit perferendis quas.
                            Explicabo neque magnam cum hic in nemo voluptas laborum, veritatis architecto ducimus quos, iste repellendus beatae qui id
                            nulla.
                        </p>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button type="submit" className="w-full">
                        Save changes
                    </Button>
                    <Button type="submit" className="w-full" variant={'outline'} asChild>
                        <DialogClose>cancel</DialogClose>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
}

export const Scrollable: Story = {
    render: args => (
        <Dialog {...args}>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <div className="flex flex-col">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum consequuntur cumque quidem accusamus,
                            labore aliquam nisi earum, veritatis mollitia maxime saepe eaque placeat itaque perferendis, iste dolorum animi suscipit?
                            Repellat vitae ratione in, doloremque sequi harum modi? Iusto architecto aut totam voluptatum voluptate veniam eveniet
                            reprehenderit, maxime molestiae ratione atque error tempora sunt dignissimos molestias dolores, illum nisi repudiandae.
                            Distinctio tempore in dolorem cumque omnis itaque nihil voluptate sapiente necessitatibus consequuntur vitae illum optio,
                            animi, culpa harum odit quo cupiditate quam quas inventore. Laborum saepe illo excepturi ipsum odit. Nostrum ullam, id
                            enim in cum animi. Cum minima provident tempore. Magni illo eius fugit non laborum temporibus rerum provident quidem,
                            possimus quos omnis cum? Ipsum odit repudiandae dignissimos non. Perspiciatis blanditiis earum aut voluptates odit tenetur
                            dolorem itaque molestiae numquam natus veniam obcaecati, vel soluta hic, amet modi. Consectetur culpa vel laboriosam
                            voluptatibus natus esse ex provident atque debitis! Nulla tenetur sed a! Ratione soluta ipsa repudiandae accusamus
                            distinctio a? Corporis, adipisci. Quod necessitatibus obcaecati architecto quo veritatis aliquam eius ipsa accusantium
                            nobis illo? Beatae perferendis minima dignissimos voluptatibus? Praesentium, minus. Placeat numquam reiciendis, excepturi
                            ipsam corporis veniam non perspiciatis nam a aspernatur, eum ut saepe laboriosam animi soluta atque provident, similique
                            quam voluptatibus deleniti totam quidem libero recusandae. Ab deleniti eum possimus corrupti, ratione sapiente, fuga
                            asperiores eius, qui aliquam sequi voluptate dolores natus harum excepturi? Laborum necessitatibus provident perspiciatis.
                            Rem delectus veritatis nam blanditiis assumenda eius obcaecati? Ratione nulla tempora aperiam corrupti enim incidunt
                            cupiditate atque neque distinctio veniam iste porro, consequuntur tempore ad nesciunt numquam, mollitia suscipit in totam!
                            Distinctio quo sunt vel nam magni dolorem. Laudantium omnis placeat quas officia eligendi maiores dolor quidem? A nam
                            alias eaque voluptas itaque sunt consequatur error tenetur quo fugit molestias sed debitis aliquam, adipisci rerum nemo
                            qui id? Ratione nihil eveniet aut possimus non! Accusamus, vero accusantium eaque voluptate consequuntur ea dolor, odit
                            dolore nulla et voluptates veniam consectetur consequatur saepe ex? Tenetur expedita debitis doloribus similique
                            voluptate! Architecto praesentium, sapiente ipsam deserunt aliquid cumque assumenda in veniam ratione? Ratione porro optio
                            vel accusamus iure repellendus suscipit, a est ex excepturi. Officia ducimus provident voluptatum odit porro voluptate.
                            Optio ipsa accusantium repudiandae odit dolore rem laborum. Libero omnis repellendus optio rerum quasi, cupiditate
                            delectus possimus illum. Quos harum nobis adipisci consectetur inventore deleniti velit esse enim praesentium dignissimos?
                            Sunt laborum accusamus distinctio et possimus qui dolore temporibus ratione, nemo porro dolores dicta nam modi? Nobis
                            ratione, provident quae, rerum, sapiente voluptatem quia odit saepe ex dolor rem quasi. Dicta nobis eaque rerum possimus
                            obcaecati quo fugit, at commodi expedita, consequatur modi laboriosam voluptates blanditiis unde dolorum! Delectus error
                            in provident minima. Omnis in dolore ipsam, molestias error eum! Reprehenderit dolor impedit incidunt sed debitis eaque
                            laudantium quos beatae at deserunt quia explicabo exercitationem obcaecati minus nisi cumque fuga, ad esse veniam illum
                            praesentium! Labore quas saepe alias laudantium. Earum exercitationem libero asperiores labore corrupti, eius quasi quia,
                            vero porro vitae dolor excepturi harum fuga. Repudiandae quam, hic architecto corrupti optio asperiores minima. Quia
                            veritatis cum dolorum quod impedit! Nam dolor ex blanditiis quasi, voluptatem voluptates rem corrupti quod architecto
                            fugit. Eligendi laudantium facilis earum, et ipsam id, quisquam nemo alias repellat sint ea. Dolorem praesentium aliquid
                            assumenda a. Doloremque nisi cum reiciendis temporibus a autem odio asperiores. Tenetur beatae explicabo quisquam
                            exercitationem facere, vel, ex sequi deleniti similique dolorem, fugiat aut quae consequatur ea delectus dolores pariatur
                            cum. Laudantium modi molestiae, ratione veritatis dicta minus quo sapiente nostrum quaerat, tempore incidunt? Nisi aliquid
                            in molestiae ad dicta? Quas perspiciatis laudantium cupiditate praesentium velit a officiis. Vel, autem odit? Error iusto
                            aliquam asperiores velit, aliquid ex quae vero perspiciatis quos laudantium, voluptates accusamus maxime iste libero
                            nostrum, in impedit ratione. Nihil laudantium voluptatibus porro ratione possimus temporibus laborum quos. Nihil dolor
                            nesciunt vero dolorem quia. Nostrum animi voluptatibus dolores obcaecati unde omnis at ipsa quo aut quam. Vero eum enim
                            nesciunt a necessitatibus corporis magni tempora perferendis sequi quisquam? Doloremque, a sapiente atque rem repellat
                            similique veniam placeat officia id dolorum voluptas nulla reprehenderit modi cumque accusamus dolores. Qui quas optio
                            exercitationem eligendi cumque non quia beatae nostrum asperiores. Magnam commodi consequatur quisquam, quas saepe quo a
                            similique consectetur numquam maiores culpa. Repellendus tempore excepturi, eaque architecto harum dicta possimus at
                            perspiciatis minima quis rem in eos reprehenderit nesciunt! Cupiditate numquam quod hic. Assumenda veritatis tempora
                            tenetur sequi a fugit aperiam unde id odit modi. Sequi maxime perspiciatis quisquam, sit velit quod excepturi fuga, earum
                            repudiandae consectetur qui id! Reiciendis praesentium et itaque corporis voluptatum veniam rem laborum! Alias molestiae
                            itaque sequi maxime, porro dolorem error commodi doloribus eligendi, nulla est. Doloremque dicta nostrum, vel ipsa
                            nesciunt voluptatem placeat? Voluptatem blanditiis sed at omnis voluptates, sequi aperiam nulla nisi saepe ducimus fuga
                            magnam nesciunt necessitatibus harum quod vel libero error maxime tempora sint, ex voluptatibus nostrum labore ipsam!
                            Vitae! Dolores similique labore et nisi laborum? Dolorem nostrum commodi, quo autem veritatis veniam architecto
                            consequatur facere ipsum asperiores repellendus nemo distinctio quam repudiandae pariatur unde, aliquid cupiditate ab.
                            Nisi, saepe. Earum amet porro autem. Quia dolor provident repellat! Dignissimos tenetur aliquam nulla illum quasi libero,
                            aliquid est autem labore sit dolore quas ducimus vel, laborum omnis fuga. Blanditiis, aspernatur sunt? Ad provident
                            eveniet eum blanditiis repudiandae quis. Ipsum, eaque. Commodi, facilis quia ducimus veritatis natus earum pariatur
                            temporibus nobis exercitationem. Laborum esse, eum vero ducimus minima tempore? Soluta, ab dolore? Eum porro, ipsum dolor
                            tempora ea minus beatae quas maiores, expedita natus, molestias tenetur dolorem ipsam laudantium corrupti a quia repellat
                            voluptate nulla repudiandae quisquam delectus non. Sunt, doloribus exercitationem. Cumque repellat harum id quas, est ea
                            earum nam aspernatur voluptatum nobis et praesentium perspiciatis eius dicta nihil. Facilis illo eos, animi dicta
                            architecto eaque mollitia ipsum dolor voluptatem cum! Id iure repellendus modi repudiandae optio doloribus natus iste
                            obcaecati. Enim magnam, culpa asperiores deserunt voluptas aut, explicabo iste mollitia eligendi soluta repellendus
                            nostrum quod minus ab fuga aliquam officia! Ut quasi iste corporis quod enim, rem error distinctio dignissimos tenetur
                            alias molestiae aliquam deleniti, accusantium quae quaerat amet. Natus ut, eveniet beatae cumque fugit qui obcaecati
                            excepturi aperiam provident? Ex consequatur ullam odio. Molestias, placeat asperiores similique commodi quibusdam sequi
                            magni veritatis, enim maiores cupiditate saepe nobis. Eligendi itaque adipisci commodi voluptate quibusdam sed eius hic.
                            Modi, reprehenderit reiciendis? Error iste sit id tenetur facere, beatae cum commodi cupiditate perspiciatis, suscipit
                            culpa sequi magnam eum voluptate deserunt consequuntur. Totam blanditiis deleniti quos neque. Esse fugit perspiciatis
                            facere veritatis cum. Nesciunt, ullam mollitia, totam corrupti doloremque consequatur cumque error accusamus explicabo
                            excepturi fuga molestias ea rem, voluptates consectetur minima culpa! Harum nisi impedit exercitationem sint veritatis
                            iure asperiores, animi provident? Voluptatum expedita rem asperiores, saepe consequatur rerum exercitationem? Dolore quasi
                            error atque eveniet, rerum, excepturi repellat placeat voluptatem dicta alias illo eius! Magni excepturi eos quaerat,
                            sequi animi totam reiciendis! Deserunt laboriosam vitae eum sapiente rem quae blanditiis, facere illum dolore. Ipsam cum
                            incidunt odio magni necessitatibus cupiditate laboriosam culpa ea iusto, et suscipit nemo quas autem. Deleniti, temporibus
                            vero. Eligendi, commodi tenetur beatae numquam ea cum adipisci magnam non voluptate itaque dolorem atque neque dicta,
                            sequi quam, ad quisquam? Optio atque dolore dicta nostrum distinctio ipsam nihil accusantium odio. Minus earum laboriosam,
                            veritatis ducimus repellendus mollitia non quidem voluptatum dolores unde amet quo, delectus perferendis similique culpa
                            impedit quis maiores illum ratione iste commodi hic. Pariatur eveniet veniam iusto! Incidunt quod sequi blanditiis
                            voluptatum labore atque corporis aperiam excepturi voluptatem. Rerum consequuntur voluptatibus, quos autem temporibus
                            doloremque aperiam. In sint aliquam hic natus cupiditate molestias enim perferendis modi possimus? Molestias, quasi.
                            Laudantium natus in porro eos debitis architecto neque nam, veniam culpa. Blanditiis doloremque reprehenderit, voluptas
                            quasi commodi cum sed vel dignissimos, voluptates maxime reiciendis, voluptatum quisquam rem illum? Voluptas distinctio
                            expedita suscipit, doloremque, cum atque sapiente aut itaque facere ea aperiam maiores praesentium sint molestiae?
                            Cupiditate corporis esse magni itaque alias sequi quisquam eligendi tenetur unde. Esse, dolorum! Omnis error recusandae,
                            sunt adipisci possimus vel libero reprehenderit iste reiciendis vero debitis, est cum commodi quo. Fugit quod doloremque
                            facere explicabo atque, magnam tempora nulla pariatur magni inventore laboriosam! Quae laudantium vitae quas eos ipsam
                            inventore temporibus sint itaque ea dolorem voluptate sequi amet voluptas dolorum eum recusandae nesciunt odio soluta ut,
                            assumenda neque saepe cum necessitatibus officiis. Hic! Soluta, laudantium iusto dolorem tempora eius aspernatur odit hic
                            temporibus quaerat recusandae saepe corporis ab enim quam consequuntur inventore provident aliquam optio eos! Eveniet
                            ullam incidunt expedita ducimus magnam et. Cumque suscipit mollitia expedita fuga, nam magni debitis provident quasi odit.
                            Quae molestias temporibus illum voluptatum doloremque quasi, dolorum, quos nihil consectetur earum odit? Optio minus
                            consectetur blanditiis placeat sunt. Quibusdam dignissimos exercitationem veniam porro, eaque earum officia voluptas optio
                            in saepe, sit odit. Mollitia sed quaerat magnam quos? Corporis fugit aperiam commodi incidunt. Corrupti architecto
                            reiciendis voluptatum nam ipsa. Error reiciendis in ducimus sed assumenda fugiat praesentium fugit perferendis quas.
                            Explicabo neque magnam cum hic in nemo voluptas laborum, veritatis architecto ducimus quos, iste repellendus beatae qui id
                            nulla.
                        </p>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button type="submit" className="w-full">
                        Save changes
                    </Button>
                    <Button type="submit" className="w-full" variant={'outline'} asChild>
                        <DialogClose>cancel</DialogClose>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
}
